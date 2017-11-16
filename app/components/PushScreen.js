import React, { Component } from "react";
import {
  View
} from 'react-native';
import Button from 'react-native-button';
import Acc from 'react-native-acc';
import styles from './../../Styles';

export default class InAppScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: "Push",
  });

  constructor() {
    super();
  }


  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}
