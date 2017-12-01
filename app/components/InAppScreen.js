import React, { Component } from "react";
import {
  View
} from 'react-native';
import Button from 'react-native-button';
import Acc from 'react-native-acc';
import styles from './../../Styles';

function setInAppDisplayedCallback() {
  Acc.inapp.setInAppDisplayedCallback(
    (inapp) => {
      console.log("setInAppDisplayedCallback inapp: " + JSON.stringify(inapp));
    });
}

function setInAppClickedCallback() {
  Acc.inapp.setInAppClickedCallback(
    (inapp) => {
      console.log("setInAppClickedCallback inapp: " + JSON.stringify(inapp));
    });
}

function setInAppClosedCallback() {
  Acc.inapp.setInAppClosedCallback(
    (inapp) => {
      console.log("setInAppClosedCallback inapp: " + JSON.stringify(inapp));
    });
}



export default class InAppScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: "InApp",
  });

  constructor() {
    super();
    this.isInAppEnabled = false;
    this.state = {
      buttonIsInAppEnabledName : 'Enable/Disable InApps',
    };

    this._setInAppDisplayEnabled = this._setInAppDisplayEnabled.bind(this);
    this._checkInAppDisplayEnabled();
  }

  async _checkInAppDisplayEnabled() {
    console.log("_checkInAppDisplayEnabled");
    try {
      this.isInAppEnabled = await Acc.inapp.isInAppDisplayEnabled();
      console.log("_checkInAppDisplayEnabled OK:" + this.isInAppEnabled);
      this._updateButtonIsInAppEnabledName();
    } catch (e) {
      console.error(e);
    }
  }

  _setInAppDisplayEnabled() {
    if (this.isInAppEnabled) {
      Acc.inapp.setInAppDisplayEnabled(false);
      this.isInAppEnabled = false;
    } else {
      Acc.inapp.setInAppDisplayEnabled(true);
      this.isInAppEnabled = true;
    }
    this._updateButtonIsInAppEnabledName();
  }

  _updateButtonIsInAppEnabledName() {
    if (this.isInAppEnabled) {
      this.setState({buttonIsInAppEnabledName : 'Enable InApps'});
    } else {
      this.setState({buttonIsInAppEnabledName : 'Disable InApps'});
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Button
          onPress={() => navigate('InAppEvents')}
          containerStyle={styles.accbuttoncontainer}
          style={styles.accbutton}>
          InApp Events
        </Button>
        <Button
          onPress={setInAppDisplayedCallback}
          containerStyle={styles.accbuttoncontainer}
          style={styles.accbutton}>
          Set Displayed Callback
        </Button>
        <Button
          onPress={setInAppClickedCallback}
          containerStyle={styles.accbuttoncontainer}
          style={styles.accbutton}>
          Set Clicked Callback
        </Button>
        <Button
          onPress={setInAppClosedCallback}
          containerStyle={styles.accbuttoncontainer}
          style={styles.accbutton}>
          Set Closed Callback
        </Button>
        <Button
          onPress={this._setInAppDisplayEnabled}
          containerStyle={styles.accbuttoncontainer}
          style={styles.accbutton}>
          {this.state.buttonIsInAppEnabledName}
        </Button>
      </View>
    );
  }
}
