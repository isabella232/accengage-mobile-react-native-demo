import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';
import Button from 'react-native-button';
import Acc from 'react-native-acc';
import styles from './../../../Styles';

export default class DeviceInfoScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: "Device Information",
  });

  constructor(props) {
        super(props);
        this.state = {
            key: null,
            value: null
        };
  }
  render() {
    const { navigate } = this.props.navigation;
        return (
          <View style={styles.container}>
            <View style={styles.flowRight}>
                    <Text style={styles.text}>
                        Key
                    </Text>
                    <TextInput
                        style={styles.input}
                        value={this.state.key}
                        onChange={this._onKeyTextChanged}
                        placeholder='Field Name'/>
            </View>
            <View style={styles.flowRight}>
                <Text style={styles.text}>
                    Value
                </Text>
                <TextInput
                    style={styles.input}
                    value={this.state.value}
                    onChange={this._onValueTextChanged}
                    placeholder='Field Value'/>
            </View>
            <Button containerStyle={styles.accbuttoncontainer}
                style={styles.accbutton}
                onPress={this._sendAction}>
                Send
            </Button>
          </View>
        );
    }

    _onKeyTextChanged = (event) => {
        this.setState({key: event.nativeEvent.text});
    };

    _onValueTextChanged = (event) => {
        this.setState({value: event.nativeEvent.text});
    };

    _sendAction = () => {
      console.log("Action sended");
      var deviceInfo = {};
      deviceInfo[this.state.key] = this.state.value;
      Acc.analytics.deviceInfo.updateDeviceInfo(deviceInfo);
    }
}
