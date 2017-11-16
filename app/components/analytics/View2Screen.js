import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import styles from './../../../Styles';

export default class View2Screen extends Component {

  static navigationOptions = ({navigation}) => ({
    title: "View2",
  });

    _getCurrentRouteName(navigationState) {
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
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to View2 !</Text>
      </View>
    );
  }


}
