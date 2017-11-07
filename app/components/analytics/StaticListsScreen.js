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
import Button from 'react-native-button';
import Acc from 'react-native-acc';

export default class StaticListsScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: "Static Lists",
  });

  constructor(props) {
        super(props);
        this.state = {
            index: 0,
            idString: null,
            choice: "Subscribe",
            //date: Moment().format("YYYY-MM-DD"),
            switchIsOn: false,
            resultIdentifier: null,
            resultExpirationDate: null,
            resultName: null,
            resultStatus: null,
        };
}

  render() {
    const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    {this.state.choice}
                </Text>
                <Slider
                    style={{width: 300}}
                    step={1}
                    minimumValue={0}
                    maximumValue={2}
                    value={this.state.index}
                    onValueChange={this._onIndexChanged}
                />
                <View style={styles.flowRight}>
                    <Text style={styles.text}>
                        ExternalID
                    </Text>
                    <TextInput
                        style={styles.input}
                        value={this.state.idString}
                        onChange={this._onIdTextChanged}
                        placeholder='listID#1'/>
                </View>
                <View style={styles.flowRight}>
                    <DatePicker
                        style={{width: 200}}
                        date={this.state.date}
                        mode="date"
                        placeholder="select date"
                        format="YYYY-MM-DD"
                        confirmBtnText="Confirmer"
                        cancelBtnText="Annuler"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36
                            }
                        }}
                        onDateChange={(date) => {
                            this.setState({date: date})
                        }}
                    />
                    <Switch
                        onValueChange={(value) => this.setState({switchIsOn: value})}
                        style={styles.switch}
                        value={this.state.switchIsOn}/>
                    <Text style={styles.text}>
                        Activer {"\n"} Date d'expiration
                    </Text>
                </View>
                <Button containerStyle={styles.accbuttoncontainer}
                    style={styles.accbutton}
                    onPress={this._sendAction}>
                    Send
                </Button>
                <View style={styles.container}>
                    <Text style={styles.text}>
                        Id: {this.state.resultIdentifier}
                    </Text>
                    <Text style={styles.text}>
                        ExpDate: {this.state.resultExpirationDate}
                    </Text>
                    <Text style={styles.text}>
                        Name: {this.state.resultName}
                    </Text>
                    <Text style={styles.text}>
                        Status: {this.state.resultStatus}
                    </Text>
                </View>
                <Button containerStyle={styles.accbuttoncontainer}
                    style={styles.accbutton}
                    onPress={() => navigate('ListStaticListsScreen')}>
                    List
                </Button>
            </View>
        );
    }

    _onIdTextChanged = (event) => {
        this.setState({idString: event.nativeEvent.text});
    };

    _onIndexChanged = (value) => {
        if (value === 0)
            this.setState({choice: "Subscribe"});
        else if (value === 1)
            this.setState({choice: "Unsubscribe"});
        else if (value === 2)
            this.setState({choice: "Get status"});
        this.setState({index: value});
    };

    _sendAction = () => {
        if (this.state.index === 0) {
            if (this.state.switchIsOn)
                Acc.analytics.staticlist.subscribeToLists([{
                    identifer: this.state.idString,
                    //expirationDate: Moment(this.state.date, 'YYYY-MM-DD').unix()
                }]);
            else
                Acc.analytics.staticlist.subscribeToLists(this.state.idString);
        }
        else if (this.state.index === 1)
            Acc.analytics.staticlist.unsubscribeFromLists(this.state.idString);
        else if (this.state.index === 2)
            Acc.analytics.staticlist.subscriptionStatusForLists([{identifer: this.state.idString}], (error, result) => {
                if (error) {
                    console.error(error);
                } else {
                    this.setState({
                        resultIdentifier: result[0].identifer,
                        //resultExpirationDate: Moment.unix(result[0].expirationDate).format('YYYY-MM-DD'),
                        resultName: result[0].name,
                        resultStatus: result[0].subscriptionStatus,
                    });
                }
            });
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