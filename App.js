/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Button from 'react-native-button';
import Acc from 'react-native-acc';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

function trackEvent() {
    var papa = {
        name: "Andrei",
        age: 33
    };
    var maman = {
        name: "Muriel",
        age: 33
    };
    var nikita = {
        name: "Nikita",
        age: 1,
        parents : [papa, maman]
    };
    Acc.analytics.tracking.trackEvent(5001, nikita);
}

function trackLead() {
    Acc.analytics.tracking.trackLead("mylabel", "123");
}

function trackCart() {
    var item = {id: "07", label: "Reebook", category: "Shoes", currency: "EUR", price: 39.99, quantity: 3};
    Acc.analytics.tracking.trackCart("02", item);
}

function trackPurchase() {
    var item1 = {id: "01", label: "Label#1", category: "Cat#1", currency: "EUR", price: 9.99, quantity: 2};
    var item2 = {id: "02", label: "Label#2", category: "Cat#1", currency: "EUR", price: 86.78, quantity: 1};
    var item3 = {id: "03", label: "Label#3", category: "Cat#5", currency: "EUR", price: 40.09, quantity: 1};
    Acc.analytics.tracking.trackPurchase("03", "EUR", 136.8, [item1, item2, item3]);
}

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
          <Button onPress={trackEvent}
              containerStyle={styles.accbuttoncontainer}
              style={styles.accbutton}>
              Track Event
          </Button>
          <Button onPress={trackLead}
              containerStyle={styles.accbuttoncontainer}
              style={styles.accbutton}>
              Track Lead
          </Button>
          <Button onPress={trackCart}
              containerStyle={styles.accbuttoncontainer}
              style={styles.accbutton}>
              Track Cart
          </Button>
          <Button onPress={trackPurchase}
              containerStyle={styles.accbuttoncontainer}
              style={styles.accbutton}>
              Track Purchase
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
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
});
