'use strict';

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
        	categorie : null,
        	identifier : null
        };
  }
  render() {
    const { navigate } = this.props.navigation;
        return (  
        <View style={styles.container}>
          	
          
          	<View style={styles.flowRight}>
                    <Text style={styles.text}>
                        Categorie
                    </Text>
                    <TextInput
                        style={styles.input}
                        value={this.state.categorie}
                        onChange={this._onKeyCategorieChanged}
                        placeholder='Categorie'/>
            </View>
            
            <View style={styles.flowRight}>
                	<Text style={styles.text}>
                    	Identifier
                	</Text>
                	<TextInput
                    	style={styles.input}
                    	value={this.state.identifier}
                    	onChange={this._onValueIdentifierChanged}
                    	placeholder='Identifier'/>
            </View>
             
        
        <View style={{flexDirection: 'row'}}>
            <Button containerStyle={styles.blueButton}
                	style={styles.accbutton}
                	onPress={this._sendSetDeviceTagAction}>
                			Add device tag
           	</Button>
            
            <Button containerStyle={styles.redButton}
                	style={styles.accbutton}
                	onPress={this._sendDelelteDeviceTagAction}>
                			Delete device tag
            </Button> 
       </View>
       
    </View>
                 
        );
    }

	 _onKeyCategorieChanged = (event) => {
        this.setState({categorie: event.nativeEvent.text});
    };

    _onValueIdentifierChanged = (event) => {
        this.setState({identifier: event.nativeEvent.text});
    };
    
    _sendSetDeviceTagAction = () => {
    	var dict = {};
		this._setDeviceTag(this.state.categorie, this.state.identifier, dict)
    }
    
    _sendDelelteDeviceTagAction = () => {
    	this._deleteDeviceTag(this.state.categorie, this.state.identifier)
    }
    

    _setDeviceTag(categorie, identifier, dict) {
      Acc.analytics.deviceTag.setDeviceTag(categorie, identifier, dict);
    }
    
    _deleteDeviceTag(categorie, identifier, dict) {
      Acc.analytics.deviceTag.deleteDeviceTag(categorie, identifier);
    }
}
