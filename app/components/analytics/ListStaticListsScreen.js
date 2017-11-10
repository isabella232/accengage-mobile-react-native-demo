'use strict';

import React, {Component} from 'react';
import DatePicker from 'react-native-datepicker'
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Slider,
    Switch,
    NativeModules,
    List,
    ListItem,
    FlatList
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Button from 'react-native-button';
import Acc from 'react-native-acc';

export default class ListStaticListsScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: "Lists Subscribed",
  });

  constructor(props) {
        super(props);
        this.state = {
            data: [],
            name: ''
        };
        this.getData = this.getData.bind(this);        
    }

    render() {
        return (
            <View style={styles.container}>
                <Button containerStyle={styles.accbuttoncontainer}
                    style={styles.accbutton}
                    onPress={this.getData}>
                    Get Subscribed Lists 
                </Button>
                <FlatList
                  data={this.state.data}
                  renderItem={({item}) => <Text style={styles.text}>Nom : {item.name + " | ExternalID : " + item.listID}</Text>}
                />
            </View>
        );
    }

    getData() {
        this._getStaticListsSubscribed();
    }

    async _getStaticListsSubscribed() {
          try {
            var data = await Acc.analytics.staticlist.getStaticListsSubscribed();
            console.log(data);
            console.log(data[0].name);
            if(data != null) {
                this.setState({data: data,
                    name: data[0].name});
                console.log(this.state.data);
            }

          } catch (e) {
            console.log(e);
          }
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  accbuttoncontainer: {
    margin: 5,
    padding: 10,
    width: 300,
    height: 45,
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: '#0000ff',
  },
  accbutton: {
    fontSize: 20,
    color: 'white',
  },
  text: {
        marginRight: 10,
        marginBottom: 20,
        fontSize: 18,
        textAlign: 'center',
        color: '#656565'
    },
    input: {
        alignSelf: 'stretch',
        marginBottom: 20,
        height: 36,
        padding: 4,
        marginRight: 5,
        flexGrow: 1,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#48BBEC',
        borderRadius: 8,
        color: '#48BBEC',
    },
    flowRight: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
    },
    switch: {
        marginLeft: 20,
},
});