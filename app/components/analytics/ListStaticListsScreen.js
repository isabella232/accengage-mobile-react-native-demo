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
    NativeModules
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Button from 'react-native-button';
import Acc from 'react-native-acc';

function getListsOfSubscriptions() {
    console.log(Acc.analytics.staticlist);
    Acc.analytics.staticlist.getListsOfSubscriptions();
}

export default class ListStaticListsScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: "Static Lists List",
  });

  constructor(props) {
        super(props);
        this.state = {
            index: 0,
            idString: null,
            choice: "Subscribed",
            //date: Moment().format("YYYY-MM-DD"),
            switchIsOn: false,
            resultIdentifier: null,
            resultExpirationDate: null,
            resultName: null,
            resultStatus: null,
        };
}


  render() {
        return (
            <View style={styles.container}>
                <Button containerStyle={styles.accbuttoncontainer}
                    style={styles.accbutton}
                    onPress={getListsOfSubscriptions}>
                    getListsOfSubscriptions
                </Button>
            </View>
        );
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  accbuttoncontainer: {
    margin: 5,
    padding: 10,
    width: 200,
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