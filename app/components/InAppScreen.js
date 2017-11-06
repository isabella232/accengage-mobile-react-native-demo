import React, { Component } from "react";
import {
  StyleSheet,
  View
} from 'react-native';
import Button from 'react-native-button';
import Acc from 'react-native-acc';

export default class InAppScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: "Static Lists",
  });
  render() {
    return (
      <View style={styles.container}>
        <Button
          containerStyle={styles.accbuttoncontainer}
          style={styles.accbutton}>
          TODO
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
});