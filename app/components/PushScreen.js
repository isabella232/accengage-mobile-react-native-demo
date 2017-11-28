import React, { Component } from "react";
import {
  View,
  Text
} from 'react-native';
import Button from 'react-native-button';
import Acc from 'react-native-acc';
import styles from './../../Styles';

export default class PushScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: "Push",
  });

  constructor() {
    super();
    this.state = {
      buttonEnabledName : '',
      textEnabledName : '',
      buttonLockedName : '',
      textLockedName : '',
      textToken : '',
    };
    Acc.push.isEnabled().then(enabled => {
      this.isPushEnabled = enabled;
      this._updateEnabledNames();
      if (this.isPushEnabled) {
        this._getToken();
      }
    });
    Acc.push.isLocked().then(locked => {
      this.isPushLocked = locked;
      this._updateLockedNames();
    });
    this._setEnabled = this._setEnabled.bind(this);
    this._setLocked = this._setLocked.bind(this);
    this._getToken = this._getToken.bind(this);
  }

  _updateEnabledNames() {
    if (this.isPushEnabled) {
      this.setState({textEnabledName : 'Push notifications are enabled'});
      this.setState({buttonEnabledName : 'Disable'});
    } else {
      this.setState({textEnabledName : 'Push notifications are disabled'});
      this.setState({buttonEnabledName : 'Enable'});
    }
  }

  _updateLockedNames() {
    if (this.isPushLocked) {
      this.setState({textLockedName : 'Push notifications are locked'});
      this.setState({buttonLockedName : 'Unlock'});
    } else {
      this.setState({textLockedName : 'Push notifications are unlocked'});
      this.setState({buttonLockedName : 'Lock'});
    }
  }

  _setEnabled() {
    this.isPushEnabled = !this.isPushEnabled;
    Acc.push.setEnabled(this.isPushEnabled);
    this._updateEnabledNames();
  }

  _setLocked() {
    this.isPushLocked = !this.isPushLocked;
    Acc.push.setLocked(this.isPushLocked);
    this._updateLockedNames();
  }

  _getToken() {
    Acc.push.getToken().then(token => {
      this.setState({textToken : token})
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Button
          onPress={() => navigate('PushEvents')}
          containerStyle={styles.accbuttoncontainer}
          style={styles.accbutton}>
          Push Events
        </Button>
        <Button
          onPress={this._setEnabled}
          containerStyle={styles.accbuttoncontainer}
          style={styles.accbutton}>
          {this.state.buttonEnabledName}
        </Button>
        <Text style={styles.welcome}>
          {this.state.textEnabledName}
        </Text>
        <Button
          onPress={this._setLocked}
          containerStyle={styles.accbuttoncontainer}
          style={styles.accbutton}>
          {this.state.buttonLockedName}
        </Button>
        <Text style={styles.welcome}>
          {this.state.textLockedName}
        </Text>
        <Button
          onPress={this._getToken}
          containerStyle={styles.accbuttoncontainer}
          style={styles.accbutton}>
          Get token
        </Button>
        <Text style={styles.welcome}>
          {this.state.textToken}
        </Text>
      </View>
    );
  }
}
