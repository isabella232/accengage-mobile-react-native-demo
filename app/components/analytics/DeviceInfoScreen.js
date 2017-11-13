import React, {Component} from 'react';
import DatePicker from 'react-native-datepicker'
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Slider,
    Switch,
    NativeModules
} from 'react-native';
import Button from 'react-native-button';
import Acc from 'react-native-acc';

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
        this._sendAction = this._sendAction.bind(this);
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
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  accbuttoncontainer: {
    margin: 5,
    padding: 10,
    width: 200,
    height: 45,
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: '#0000ff',
  },
  accbutton: {
    fontSize: 20,
    color: 'white',
  },
  text: {
        marginRight: 10,
        marginBottom: 20,
        fontSize: 18,
        textAlign: 'center',
        color: '#656565'
    },
    input: {
        alignSelf: 'stretch',
        marginBottom: 20,
        height: 36,
        padding: 4,
        marginRight: 5,
        flexGrow: 1,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#48BBEC',
        borderRadius: 8,
        color: '#48BBEC',
    },
    flowRight: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
    },
    switch: {
        marginLeft: 20,
},
});