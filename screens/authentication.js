import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Theme from '../Theme';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class Login extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      header:null,
    };
  };
  render() {
    return (
      <ScrollView contentContainerStyle={{flexGrow:1}} style={{flex: 1, backgroundColor: Theme.bgColor,flexDirection:'column-reverse',paddingBottom:50}}>
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Icon name='heartbeat' size={150} color={Theme.highlightColor}/>
      </View>
        <Text
          style={{
            color: Theme.textColor,
            fontSize: 35,
            marginHorizontal: 10,
            marginVertical: 5,
            fontWeight: 'bold',
          }}>
          Get Started
        </Text>
        <Text
          style={{
            color: Theme.textColor,
            fontSize: 16,
            marginHorizontal: 10,
            marginVertical: 5,
          }}>
          Our profession is the only one which works unceasingly to annihilate itself.
        </Text>
        
        <View style={{marginTop: 20}}>
          <TextInput
          keyboardType='phone-pad'
            placeholder="Mobile No. "
            style={{
              marginHorizontal: 15,
              marginVertical: 15,
              borderColor: Theme.textColor,
              padding: 15,
              borderWidth: 1,
              borderRadius: 5,
            }}
          />
          <TouchableOpacity
            style={{
              marginHorizontal: 20,
              marginVertical: 5,
              backgroundColor: Theme.highlightColor,
              borderRadius:5,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: Theme.bgColor, fontSize: 18}}>
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
        </View>
      </ScrollView>
    );
  }
}