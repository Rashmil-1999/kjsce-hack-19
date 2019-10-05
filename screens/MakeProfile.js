import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput
} from 'react-native';
import Theme from '../Theme'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Profile extends Component {
  render() {
    return (
      <View style={{backgroundColor: 'white', flex: 1, alignItems: 'center'}}>
          <View style={styles.header}></View>
              <View style={{flexDirection: 'row', marginTop: 20}}>
                <TextInput placeholder="Please enter your name here" placeholderColor="grey" fontSize={20}/>
              </View>
              <View  style={{flexDirection: 'row'}}>
                <View style={{flexDirection: 'column', margin: 15, marginLeft: 50, width: Dimensions.get('screen').width/2.2}}>
                    <View style={{flexDirection: 'row', margin: 5, alignItems: 'center'}}>
                      <TextInput placeholder="Age" placeholderColor="grey" fontSize={17}/>
                   </View> 
                   <View style={{flexDirection: 'row', margin: 5, alignItems: 'center'}}>
                      <TextInput placeholder="Weight" placeholderColor="grey" fontSize={17}/>
                   </View> 
                   <View style={{flexDirection: 'row', margin: 5, alignItems: 'center'}}>
                      <TextInput placeholder="Sex" placeholderColor="grey" fontSize={17}/>
                   </View>                
                </View>
                <View style={{flexDirection: 'column', margin: 15, marginLeft: 18, width: Dimensions.get('screen').width/2.2}}>
                  <View style={{flexDirection: 'row', margin: 5, alignItems: 'center'}}>
                      <TextInput placeholder="Blood group" placeholderColor="grey" fontSize={17}/>
                   </View>
                   <View style={{flexDirection: 'row', margin: 5, alignItems: 'center'}}>
                      <TextInput placeholder="Height in cm" placeholderColor="grey" fontSize={17}/>
                   </View>                
                </View>
              </View>
              <TouchableOpacity>
                <View style={{backgroundColor: Theme.highlightColor, borderRadius: 12.5, 
                    width: Dimensions.get('screen').width/1.2, height: 50,
                    justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
                  <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>Register</Text>
                </View>
              </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    alignSelf:'center',
    marginTop:30
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    margin: 20,
    fontWeight:'800',
  },
  body:{
    marginTop:2,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:10,
  },
  name:{
    fontWeight: 'bold',
    fontSize:28,
    color: 'black',
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: Theme.highlightColor,
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    height:50,
    width: Dimensions.get('screen').width/1.05,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 6,
    borderRadius:10,
    borderWidth: 2,
    borderColor: Theme.highlightColor
  },
});
 