/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  DeviceEventEmitter
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Button from 'react-native-button';
import Acc from 'react-native-acc';

import styles from './Styles';

import PushScreen from "./app/components/PushScreen";
import AnalyticsScreen from "./app/components/AnalyticsScreen";
import TrackingScreen from './app/components/analytics/TrackingScreen'
import StaticListsScreen from "./app/components/analytics/StaticListsScreen";
import DeviceInfoScreen from "./app/components/analytics/DeviceInfoScreen";
import InAppScreen from "./app/components/InAppScreen";
import ListStaticListsScreen from "./app/components/analytics/ListStaticListsScreen";
import View1Screen from "./app/components/analytics/View1Screen";
import View2Screen from "./app/components/analytics/View2Screen";
import PushEventsScreen from "./app/components/push/PushEventsScreen.js";
import InAppEventsScreen from "./app/components/inapp/InAppEventsScreen.js";
import ControlScreen from "./app/components/ControlScreen";

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Accengage Demo',
  };

  constructor() {
    super();
    this._disableInAppDisplay = this._disableInAppDisplay.bind(this);

    DeviceEventEmitter.addListener('com.ad4screen.sdk.intent.category.PUSH_NOTIFICATIONS', function(event) {
      console.log("ActionsReceiver " + JSON.stringify(event));
    });
  }

  render() {
      const { navigate } = this.props.navigation;
      this._disableInAppDisplay();
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Accengage React Native Demo
        </Text>
        <Button onPress={() => navigate('Push')}
                containerStyle={styles.accbuttoncontainer}
                style={styles.accbutton}>
          Push controls
        </Button>
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
        <Button onPress={() => navigate('Control')}
                containerStyle={styles.accbuttoncontainer}
                style={styles.accbutton}>
          Control
        </Button>
      </View>
    );
  }

  _disableInAppDisplay() {
    if (!this.isInAppEnabled) {
      Acc.inapp.setInAppDisplayEnabled(true);
      this.isInAppEnabled = true;
    }
  }

}

const AccDemoApp = StackNavigator({
  Home: { screen: HomeScreen },
  Push: {screen: PushScreen},
  InApp: {screen: InAppScreen},
  Analytics: {screen: AnalyticsScreen},
  Tracking: {screen: TrackingScreen},
  StaticLists: {screen: StaticListsScreen},
  ListStaticListsScreen: {screen: ListStaticListsScreen},
  DeviceInfo: {screen: DeviceInfoScreen},
  View1: {screen: View1Screen},
  View2: {screen: View2Screen},
  PushEvents: {screen: PushEventsScreen},
  InAppEvents: {screen: InAppEventsScreen},
  Control: {screen: ControlScreen},
});

function getCurrentRouteName(navigationState) {
    if (!navigationState) {
        return null;
    }
    const route = navigationState.routes[navigationState.index];
    // dive into nested navigators
    if (route.routes) {
        return getCurrentRouteName(route);
    }
    return route.routeName;
}

export default class App extends React.Component {
  render() {
    return <AccDemoApp
        onNavigationStateChange={(prevState, currentState) => {
            const currentScreen = getCurrentRouteName(currentState);
            const prevScreen = getCurrentRouteName(prevState);

            if (prevScreen !== currentScreen) {
              if (currentScreen === "View1") {
                Acc.analytics.views.setView(currentScreen);
              }
              if (currentScreen === "View2") {
                Acc.analytics.views.setView(currentScreen);
              }
              if (prevScreen === "View1") {
                Acc.analytics.views.dismissView(prevScreen);
              }
              if (prevScreen === "View2") {
                Acc.analytics.views.dismissView(prevScreen);
              }
            }
        }}/>;
  }

}
