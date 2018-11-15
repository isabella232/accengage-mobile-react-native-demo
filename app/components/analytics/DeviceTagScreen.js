import React, {Component} from 'react';
import {
	Switch,
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';
import Button from 'react-native-button';
import Acc from 'react-native-acc';
import styles from './../../../Styles';
import {DeviceTag} from 'react-native-acc';

export default class DeviceTagScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: "Device Tag",
  });

  constructor(props) {
        super(props);
        this.state = {
        	switch1IsOn : false,
        	switch2IsOn : false,
        	switch3IsOn : false,
        	switch4IsOn : false,
        };
  }
  render() {
    const { navigate } = this.props.navigation;
        return (  
          <View style={styles.container}>
          
          	<View style={styles.flowRight}>
          		 <Text style={styles.text}>
                        Device tag 1
                </Text>
          		<Switch
         		onValueChange = {this._sendAction1}
         		tyle={styles.switch}
         		value={this.state.switch1IsOn} />
         	</View>
         	
         	<View style={styles.flowRight}>
          		 <Text style={styles.text}>
                        Device tag 2
                </Text>
          		<Switch
         		onValueChange = {this._sendAction2}
         		tyle={styles.switch}
         		value={this.state.switch2IsOn} />
         	</View>
         	
         	<View style={styles.flowRight}>
          		 <Text style={styles.text}>
                        Device tag 3
                </Text>
          		<Switch
         		onValueChange = {this._sendAction3}
         		tyle={styles.switch}
         		value={this.state.switch3IsOn} />
         	</View>
         	
         	<View style={styles.flowRight}>
          		 <Text style={styles.text}>
                        Device tag 4
                </Text>
          		<Switch
         		onValueChange = {this._sendAction4}
         		tyle={styles.switch}
         		value={this.state.switch4IsOn} />
         	</View>
         	
          
          
          
          
          <View style={styles.flowRight}>
                    <Text style={styles.text}>
                        Categorie
                    </Text>
                    <TextInput
                        style={styles.input}
                        value={this.state.key}
                        onChange={this._onKeyTextChanged}
                        placeholder='Categorie'/>
            </View>
            <View style={styles.flowRight}>
                <Text style={styles.text}>
                    Identifier
                </Text>
                <TextInput
                    style={styles.input}
                    value={this.state.value}
                    onChange={this._onValueTextChanged}
                    placeholder='Identifier'/>
            </View>
            <Button containerStyle={styles.accbuttoncontainer}
                style={styles.accbutton}
                onPress={this._sendSetDeviceTagAction}>
                Send
            </Button>
            
            <Button containerStyle={styles.accbuttoncontainer}
                style={styles.accbutton}
                onPress={this._sendDelelteDeviceTagAction}>
                Send
            </Button>
            
        </View>          
          
        );
    }

    _sendAction1 = () => {
    	this.setState({switch1IsOn:!this.state.switch1IsOn});
    	console.log("switch1IsOn" + this.state.switch1IsOn);
    	if (this.state.switch1IsOn === true) {	
        	var dict = {};
     		dict.num = 1;
			this._setDeviceTag("cat 1", "identifier 1", dict)
		} else {
    		this._deleteDeviceTag("cat 1", "identifier 1", dict)
    	}
    }
    
	_sendAction2 = () => {
		this.setState({switch2IsOn:!this.state.switch2IsOn});
		if (this.state.switch2IsOn === true) {
	    	var dict = {};
     		dict.num = 2;
			this._setDeviceTag("cat 2", "identifier 2", dict)
		} else {
    		this._deleteDeviceTag("cat 2", "identifier 2", dict)
    	}

    }
    
    _sendAction3 = () => {
    	this.setState({switch3IsOn:!this.state.switch3IsOn});
    	if (this.state.switch3IsOn === true) {
    		var dict = {};
     		dict.num = 3;
     		this._setDeviceTag("cat 3", "identifier 3", dict)
    	} else {
    		this._deleteDeviceTag("cat 3", "identifier 3", dict)
    	}
    }
    
    _sendSetDeviceTagAction = () => {
		this._setDeviceTag("cat 4", "identifier 4", dict)
    }
    
    _sendDelelteDeviceTagAction = () => {
    	this._deleteDeviceTag("cat 4", "identifier 4", dict)
    }
    

    _setDeviceTag(categorie, identifier, dict) {
      Acc.analytics.deviceTag.setDeviceTag(categorie, identifier, dict);
    }
    
    _deleteDeviceTag(categorie, identifier, dict) {
      Acc.analytics.deviceTag.deleteDeviceTag(categorie, identifier);
    }
}
