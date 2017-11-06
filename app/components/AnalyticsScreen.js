import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Button from 'react-native-button';

export default class AnalyticsScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: "Analytics",
  });
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Button onPress={() => navigate('Tracking')}
                containerStyle={styles.accbuttoncontainer}
                style={styles.accbutton}>
          Tracking
        </Button>
        <Button onPress={() => navigate('StaticLists')}
                containerStyle={styles.accbuttoncontainer}
                style={styles.accbutton}>
          Static Lists
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