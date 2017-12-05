import React, { Component } from "react";
import {
  View,
  Text,
  NativeEventEmitter,
  NativeModules
} from 'react-native';
import CheckBox from 'react-native-checkbox';
import styles from '../../../Styles';

export default class PushEventsScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: "Push Events",
  });

  constructor() {
    super();
    this.state = {
      receiveEventSubscription : null,
      clickEventSubscription : null,
      receiveEventEnabled: false,
      clickEventEnabled: false,
      textTypeEvent : '',
      textNotifId : '',
      textCustomParams : '',
    };
    this.pushManagerEmitter = new NativeEventEmitter(NativeModules.RNAcc);
    this._setReceive = this._setReceive.bind(this);
    this._setClick = this._setClick.bind(this);
  }

  _setReceive(checked) {
    this.setState({ receiveEventEnabled : !checked });

    if (!checked) {
      this.setState({
        receiveEventSubscription : this.pushManagerEmitter.addListener(
          'didReceiveNotification',
          (reminder) => this.setState({
            textTypeEvent : "Receive",
            textNotifId : reminder.notification.notificationId,
            textCustomParams : JSON.stringify(reminder.notification.customParams)
          })
        )
      });
    } else {
      this.state.receiveEventSubscription.remove();
      this.setState({ textCustomParams : ''});
    }
  }

  _setClick(checked) {
    this.setState({ clickEventEnabled : !checked });

    if (!checked) {
      this.setState({
        clickEventSubscription : this.pushManagerEmitter.addListener(
          'didClickNotification',
          (reminder) => this.setState({
            textTypeEvent : "Click",
            textNotifId : reminder.notification.notificationId,
            textCustomParams : JSON.stringify(reminder.notification.customParams)
          })
        )
      });
    } else {
      this.state.clickEventSubscription.remove();
      this.setState({ textCustomParams : ''});
    }
  }

  _clear() {
    this.setState({ textTypeEvent : ''});
    this.setState({ textNotifId : ''});
    this.setState({ textCustomParams : ''});
  }

  componentWillUnmount() {
    this._clear();
    this.state.receiveEventSubscription.remove();
    this.state.clickEventSubscription.remove();
  }

  render() {
    return (
      <View style={styles.container}>
        <CheckBox
          label='Received'
          checked={this.state.receiveEventEnabled}
          onChange={this._setReceive}
        />
        <CheckBox
          label='Clicked'
          checked={this.state.clickEventEnabled}
          onChange={this._setClick}
        />
        <Text style={styles.welcome}>
          {this.state.textTypeEvent}
        </Text>
        <Text style={styles.welcome}>
          {this.state.textCustomParams}
        </Text>
        <Text style={styles.welcome}>
          {this.state.textNotifId}
        </Text>
      </View>
    );
  }
}
