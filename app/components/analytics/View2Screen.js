import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Button from 'react-native-button';
import Acc from 'react-native-acc';
import styles from './../../../Styles';
import { NavigationActions } from 'react-navigation';

export default class View2Screen extends Component {

  static navigationOptions = ({navigation}) => ({
    title: "View2",
  });

  constructor(props) {
        super(props);
        this.setView = this.setView.bind(this);
  }

  setView(viewName) {
    Acc.analytics.views.setView(viewName);
  }

  render() {
    this.setView("View2");
    const { navigate } = this.props.navigation;
    const backAction = NavigationActions.back({
      key: 'Analytics'
    })
    this.props.navigation.dispatch(backAction)
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to View2 !</Text>
      </View>
    );
  }


}
