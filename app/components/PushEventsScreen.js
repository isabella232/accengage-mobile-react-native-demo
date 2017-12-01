import React, { Component } from "react";
import {
  View,
  Text,
  NativeEventEmitter,
  NativeModules
} from 'react-native';
import CheckBox from 'react-native-checkbox';
import styles from './../../Styles';

export default class PushEventsScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: "Push Events",
  });

  constructor() {
    super();
    this.state = {
      receivedEventSubscription : null,
      clickedEventSubscription : null,
      receivedEventEnabled: false,
      clickedEventEnabled: false,
      textCustomParams : '',
    };
    this.pushManagerEmitter = new NativeEventEmitter(NativeModules.RNAcc);
    this._setReceived = this._setReceived.bind(this);
    this._setClicked = this._setClicked.bind(this);
  }

  _setReceived(checked) {
    this.setState({ receivedEventEnabled : !checked });

    if (!checked) {
      this.setState({
        receivedEventSubscription : this.pushManagerEmitter.addListener(
          'didReceiveNotification',
          (reminder) => this.setState({ textCustomParams : JSON.stringify(reminder.notification.customParams)})
        )
      });
    } else {
      this.state.receivedEventSubscription.remove();
      this.setState({ textCustomParams : ''});
    }
  }

  _setClicked(checked) {
    this.setState({ clickedEventEnabled : !checked });

    if (!checked) {
      this.setState({
        clickedEventSubscription : this.pushManagerEmitter.addListener(
          'didClickNotification',
          (reminder) => this.setState({ textCustomParams : JSON.stringify(reminder.notification.customParams)})
        )
      });
    } else {
      this.state.clickedEventSubscription.remove();
      this.setState({ textCustomParams : ''});
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <CheckBox
          label='Received'
          checked={this.state.receivedEventEnabled}
          onChange={this._setReceived}
        />
        <CheckBox
          label='Clicked'
          checked={this.state.clickedEventEnabled}
          onChange={this._setClicked}
        />
        <Text style={styles.welcome}>
          {this.state.textCustomParams}
        </Text>
      </View>
    );
  }
}
