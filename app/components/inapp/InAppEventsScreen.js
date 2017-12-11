import React, { Component } from "react";
import {
  View,
  Text,
  DeviceEventEmitter,
  NativeEventEmitter,
  NativeModules,
  Platform
} from 'react-native';
import CheckBox from 'react-native-checkbox';
import styles from '../../../Styles';

export default class InAppEventsScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: "InApp Events",
  });

  constructor() {
    super();
    this.state = {
      displayEventSubscription : null,
      clickEventSubscription : null,
      closeEventSubscription : null,
      displayEventEnabled: false,
      clickEventEnabled: false,
      closeEventEnabled: false,
      textTypeEvent : '',
      textIdInApp : '',
      textCustomParams : '',
    };
    this.pushManagerEmitter = new NativeEventEmitter(NativeModules.RNAccInApp);
    this._setDisplay = this._setDisplay.bind(this);
    this._setClick = this._setClick.bind(this);
    this._setClose = this._setClose.bind(this);
  }

  _setDisplay(checked) {
    this.setState({ displayEventEnabled : !checked });

    if (Platform.OS == "ios") {
      if (!checked) {
        this.setState({
          displayEventSubscription : this.pushManagerEmitter.addListener(
            'didInAppDisplay',
            (reminder) => this.setState({
              textTypeEvent : "Display",
              textIdInApp : reminder.inApp.messageId,
              textCustomParams : JSON.stringify(reminder.inApp.customParams)
            })
          )
        });
      } else {
        this.state.displayEventSubscription.remove();
        this._clear();
      }
    } else if (Platform.OS == "android") {
        if (!checked) {
          this.receiveEventSubscription = DeviceEventEmitter.addListener('com.ad4screen.sdk.intent.action.DISPLAYED', (e: Event) => {
              this.setState({
              textTypeEvent : "Receive",
              })
          });
        }
        else {
          this.receiveEventSubscription.remove();
          this.setState({ textTypeEvent: '',
            textIdInApp: ''});
        }
      }  
  }

  _setClick(checked) {
    this.setState({ clickEventEnabled : !checked });

    if (Platform.OS == "ios") {
      if (!checked) {
        this.setState({
          clickEventSubscription : this.pushManagerEmitter.addListener(
            'didInAppClick',
            (reminder) => this.setState({
              textTypeEvent: "Click",
              textIdInApp: reminder.inApp.messageId,
              textCustomParams: JSON.stringify(reminder.inApp.customParams)
            })
          )
        });
      } else {
        this.state.clickEventSubscription.remove();
        this._clear();
      }
    } else if (Platform.OS == "android") {
        if (!checked) {
            console.log("attention on va click");
            this.receiveEventSubscription = DeviceEventEmitter.addListener('com.ad4screen.sdk.intent.action.CLICKED', (e: Event) => {
              console.log("clicked !");
                this.setState({
                textTypeEvent : "Click",
                })
            });
          }
          else {
            this.receiveEventSubscription.remove();
            this.setState({ textTypeEvent: '',
              textIdInApp: ''});
          }
      }
  }

  _setClose(checked) {
    this.setState({ closeEventEnabled : !checked });

    if (Platform.OS == "ios") {
      if (!checked) {
        this.setState({
          closeEventSubscription : this.pushManagerEmitter.addListener(
            'didInAppClose',
            (reminder) => this.setState({
              textTypeEvent: "Close",
              textIdInApp: reminder.inApp.messageId,
              textCustomParams: JSON.stringify(reminder.inApp.customParams)
            })
          )
        });
      } else {
        this.state.closeEventSubscription.remove();
        this._clear();
      }
    } else if (Platform.OS == "android") {
      if (!checked) {
        this.receiveEventSubscription = DeviceEventEmitter.addListener('com.ad4screen.sdk.intent.action.CLOSED', (e: Event) => {
            console.log("Closed !");
            this.setState({
              textTypeEvent : "Closed",
            })
        });
      }
      else {
        this.receiveEventSubscription.remove();
        this.setState({ textTypeEvent: '',
          textIdInApp: ''});
      }
    }
    
  }

  _clear() {
    this.setState({ textTypeEvent : ''});
    this.setState({ textIdInApp : ''});
    this.setState({ textCustomParams : ''});
  }

  componentWillUnmount() {
    this._clear();
    if(Platform.OS == "ios") {
      if (this.state.displayEventSubscription !== undefined) {
        this.state.displayEventSubscription.remove();
      }
      if (this.state.clickEventSubscription !== undefined) {
        this.state.clickEventSubscription.remove();
      }
      if (this.state.closeEventSubscription !== undefined) {
        this.state.closeEventSubscription.remove();
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <CheckBox
          label='Display'
          checked={this.state.displayEventEnabled}
          onChange={this._setDisplay}
        />
        <CheckBox
          label='Click'
          checked={this.state.clickEventEnabled}
          onChange={this._setClick}
        />
        <CheckBox
          label='Close'
          checked={this.state.closeEventEnabled}
          onChange={this._setClose}
        />
        <Text style={styles.welcome}>
          {this.state.textTypeEvent}
        </Text>
        <Text style={styles.welcome}>
          {this.state.textCustomParams}
        </Text>
        <Text style={styles.welcome}>
          {this.state.textIdInApp}
        </Text>
      </View>
    );
  }
}
