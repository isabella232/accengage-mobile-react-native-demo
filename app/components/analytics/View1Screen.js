import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Button from 'react-native-button';
import Acc from 'react-native-acc';
import styles from './../../../Styles';

export default class View1Screen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: "View1",
  });

  constructor(props) {
        super(props);
        this.setView = this.setView.bind(this);
        this.setView("View1");
  }

  setView(viewName) {
    Acc.analytics.views.setView(viewName);
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to View1 !</Text>
        <Button onPress={() => navigate(
          'View2',
          {
            onGoBack: () => console.log('=====GO BACK======='),
          }
          )
        }
                containerStyle={styles.accbuttoncontainer}
                style={styles.accbutton}>
          View2
        </Button>
      </View>
    );
    this.forceUpdate();
    this.setView("View1");
  }
}
