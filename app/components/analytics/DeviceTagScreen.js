'use strict';

import React, {Component} from 'react';
import {
	Switch,
    StyleSheet,
    Text,
    TextInput,
    View,
    ScrollView,
    Picker
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
        	category : null,
        	identifier : null,
        	key : null,
        	value : null,
        	type : null,
        	keyboardType:'default',
        	dataDict : {}
        };
  }
  render() {
    const { navigate } = this.props.navigation;
        return (  
     
        <View style={styles.container}>
        
        	<ScrollView 
  			scrollEnabled={true}
  			contentContainerStyle={styles.main}>
  			
          	<View style={styles.flowRight}>
                    <Text style={styles.text}>
                        Category
                    </Text>
                    <TextInput
                        style={styles.input}
                        value={this.state.category}
                        onChange={this._onKeyCategoryChanged}
                        ref={input => { this.textCategoryInput = input }}
                        clearButtonMode="always"
                        placeholder='Category'/>
            </View>
            
            <View style={styles.flowRight}>
                	<Text style={styles.text}>
                    	Identifier
                	</Text>
                	<TextInput
                    	style={styles.input}
                    	value={this.state.identifier}
                    	onChange={this._onValueIdentifierChanged}
                    	ref={input => { this.textIdentifierInput = input }}
                    	clearButtonMode="always"
                    	placeholder='Identifier'/>
            </View>
            
         <View style={styles.sector}>
         	<Text style={styles.text}>
                    Add data
            </Text>
            
            <View style={styles.flowRight}>
                    <Text style={styles.text}>
                        Key : 
                    </Text>
                    <TextInput
                        style={styles.input}
                        value={this.state.key}
                        onChange={this._onKeyChanged}
                        ref={input => { this.textKeyInput = input}}
                        clearButtonMode="always"
                        placeholder='Key'/>
            </View>
            
                        
            <View style={styles.flowRight}>
            	<Picker style={styles.picker} itemStyle={styles.pickerItem}
            		selectedValue={this.state.type}
 				    onValueChange={(itemValue) => this.setState({type: itemValue})}>
 		   		<Picker.Item label="Text" value="Text" />
  		   		<Picker.Item label="Number" value="Number" />
  		   		<Picker.Item label="Date" value="Date" />
		   		</Picker>
		   </View>
		   
		   <View style={styles.flowRight}>
                    <Text style={styles.text}>
                        Value  : 
                    </Text>
                    <TextInput
                        style={styles.input}
                        value={this.state.value}
                        onChange={this._onValueChanged}
                        ref={input => { this.textValueInput = input }}
                        clearButtonMode="always"
                        keyboardType={(this.state.type === "Number") ? 'numeric' : 'default'}
                        placeholder='Value'/>
            </View>
                        
            <Button onPress={this._sendAddDataAction}>
                	Add data
           	</Button>
        </View>
             
        
        <View style={{flexDirection: 'row'}}>
            <Button containerStyle={styles.blueButton}
                	style={styles.accbutton}
                	onPress={this._sendSetDeviceTagAction}>
                			Add device tag
           	</Button>
            
            <Button containerStyle={styles.redButton}
                	style={styles.accbutton}
                	onPress={this._sendDeleteDeviceTagAction}>
                			Delete device tag
            </Button> 
       </View> 
	</ScrollView>   
</View>
  
        );
    }
    
	 _onKeyCategoryChanged = (event) => {
        this.setState({category: event.nativeEvent.text});
    };

    _onValueIdentifierChanged = (event) => {
        this.setState({identifier: event.nativeEvent.text});
    };
    
    _onKeyChanged = (event) => {
        this.setState({key: event.nativeEvent.text});
    };
    
    _onValueChanged = (event) => {
        this.setState({value: event.nativeEvent.text});
    };
    
    _sendSetDeviceTagAction = () => {
		this._setDeviceTag(this.state.category, this.state.identifier)
    }
    
    _sendDeleteDeviceTagAction = () => {
    	this._deleteDeviceTag(this.state.category, this.state.identifier)
    }
    
	_sendAddDataAction = () => {

		//Adding Items To data dictionary.
        console.log("Key : " + this.state.key + " Value : " + this.state.value);
		this.state.dataDict[this.state.key]	= this.state.value;
      	console.log(this.state.dataDict)
      	
      	//Clear key and value input texts
      	this.textKeyInput.clear();
    	this.textValueInput.clear();
	}
	
    _setDeviceTag(category, identifier) {
      console.log(category, identifier);
      Acc.analytics.deviceTag.setDeviceTag(category, identifier, this.state.dataDict);
      this._initializeAll();
    }
    
    _deleteDeviceTag(category, identifier) {
      Acc.analytics.deviceTag.deleteDeviceTag(category, identifier);
      this._initializeAll();
    }
    
    _initializeAll = () => {
    	this.textCategoryInput.clear();
    	this.textIdentifierInput.clear();
    	this.textKeyInput.clear();
    	this.textValueInput.clear();
        this.state.dataDict = {};
    }
}
