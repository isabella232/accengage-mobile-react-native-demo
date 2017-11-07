/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Button from 'react-native-button';

import AnalyticsScreen from "./app/components/AnalyticsScreen";
import TrackingScreen from './app/components/analytics/TrackingScreen'
import StaticListsScreen from "./app/components/analytics/StaticListsScreen";
import InAppScreen from "./app/components/InAppScreen";
import ListStaticListsScreen from "./app/components/analytics/ListStaticListsScreen";

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Accengage Demo',
  };
  render() {
      const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Accengage React Native Demo
        </Text>
        <Button onPress={() => navigate('InApp')}
                containerStyle={styles.accbuttoncontainer}
                style={styles.accbutton}>
          InApp messages
        </Button>
        <Button onPress={() => navigate('Analytics')}
          containerStyle={styles.accbuttoncontainer}
          style={styles.accbutton}>
          Analytics
        </Button>
      </View>
    );
  }
}

const AccDemoApp = StackNavigator({
  Home: { screen: HomeScreen },
  InApp: {screen: InAppScreen},
  Analytics: {screen: AnalyticsScreen},
  Tracking: {screen: TrackingScreen},
  StaticLists: {screen: StaticListsScreen},
  ListStaticListsScreen: {screen: ListStaticListsScreen},
});

export default class App extends React.Component {
  render() {
    return <AccDemoApp />;
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
