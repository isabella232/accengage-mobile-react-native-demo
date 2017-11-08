import React, { Component } from "react";
import {
  StyleSheet,
  View
} from 'react-native';
import Button from 'react-native-button';
import Acc from 'react-native-acc';

function setInAppReadyCallback() {
  Acc.inapp.setInAppReadyCallback(
    (inapp) => {
      console.log("setInAppReadyCallback inapp: " + JSON.stringify(inapp));
    });
}

function setInAppDisplayedCallback() {
  Acc.inapp.setInAppDisplayedCallback(
    (inapp) => {
      console.log("setInAppDisplayedCallback inapp: " + JSON.stringify(inapp));
    });
}

function setInAppClickedCallback() {
  Acc.inapp.setInAppClickedCallback(
    (inapp) => {
      console.log("setInAppClickedCallback inapp: " + JSON.stringify(inapp));
    });
}

function setInAppClosedCallback() {
  Acc.inapp.setInAppClosedCallback(
    (inapp) => {
      console.log("setInAppClosedCallback inapp: " + JSON.stringify(inapp));
    });
}

export default class InAppScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: "InApp",
  });
  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={setInAppReadyCallback}
          containerStyle={styles.accbuttoncontainer}
          style={styles.accbutton}>
          Set Ready Callback
        </Button>
        <Button
          onPress={setInAppDisplayedCallback}
          containerStyle={styles.accbuttoncontainer}
          style={styles.accbutton}>
          Set Displayed Callback
        </Button>
        <Button
          onPress={setInAppClickedCallback}
          containerStyle={styles.accbuttoncontainer}
          style={styles.accbutton}>
          Set Clicked Callback
        </Button>
        <Button
          onPress={setInAppClosedCallback}
          containerStyle={styles.accbuttoncontainer}
          style={styles.accbutton}>
          Set Closed Callback
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
});