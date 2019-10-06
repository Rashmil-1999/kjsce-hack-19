import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import Theme from '../Theme'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Profile extends Component {


  listItem = props => (
    <View style={{backgroundColor: Theme.bgColor, elevation: 1, marginHorizontal: 10, marginVertical: 2}}>
      <Icon
        size={25}
        name="arrow-right"
        style={{position: 'absolute', right: 10, top: 10}}
      />
      <View
        style={{
          flexDirection: 'row',
          marginVertical: 10,
          marginHorizontal: 25,
          alignItems: 'center',
        }}>
        <Icon size={30} name="user-md" />
        <View style={{flex: 1, margin: 10}}>
          <Text style={{fontWeight: 'bold'}}>{props.drName}</Text>
          <Text style={{fontWeight: '100'}}>{props.expertise}</Text>
        </View>
      </View>      
    </View>
  );

  render() {
    return (
      <View style={{backgroundColor: 'white', flex: 1}}>
              <View ></View>
              <View style={{flexDirection: 'row', marginLeft: 20, margin: 15, marginTop: 20}}>
                <Icon name={"heartbeat"} size={60} color={Theme.highlightColor}/>
                <Text style={{fontSize: 40, fontWeight: 'bold', margin: 5}}>Joey</Text>
              </View>
              <View  style={{flexDirection: 'row'}}>
                <View style={{flexDirection: 'column', margin: 10}}>
                    <View style={{flexDirection: 'row', margin: 5, alignItems: 'center'}}>
                      <Image source={require('../assets/age.png')} style={{width: 25, height: 25, color: Theme.highlightColor, margin: 5}} tintColor={Theme.highlightColor}/>
                      <Text style= {{fontSize: 15}}>Age: 20</Text>
                   </View> 
                   <View style={{flexDirection: 'row', margin: 5, alignItems: 'center'}}>
                      <Image source={require('../assets/weight-scale.png')} style={{width: 25, height: 25, color: Theme.highlightColor, margin: 5}} tintColor={Theme.highlightColor}/>
                      <Text style= {{fontSize: 15}}>Weight: 20</Text>
                   </View> 
                   <View style={{flexDirection: 'row', margin: 5, alignItems: 'center'}}>
                      <Image source={require('../assets/gender.png')} style={{width: 25, height: 25, color: Theme.highlightColor, margin: 5}} tintColor={Theme.highlightColor}/>
                      <Text style= {{fontSize: 15}}>Sex: Karvalo</Text>
                   </View>                
                </View>
                <View style={{flex: 1}}/>
                <View style={{flexDirection: 'column', margin: 10}}>
                <View style={{flexDirection: 'row', margin: 5, alignItems: 'center'}}>
                      <Image source={require('../assets/height.png')} style={{width: 25, height: 25, color: Theme.highlightColor, margin: 5}} tintColor={Theme.highlightColor}/>
                      <Text style= {{fontSize: 15}}>Height(in cm): 15</Text>
                   </View>
                   <View style={{flexDirection: 'row', margin: 5, alignItems: 'center'}}>
                      <Image source={require('../assets/blood-test.png')} style={{width: 25, height: 25, color: Theme.highlightColor, margin: 5}} tintColor={Theme.highlightColor}/>
                      <Text style= {{fontSize: 15}}>Blood Group: XXX-</Text>
                   </View>                
                </View>
              </View>
              <this.listItem drName={"Dr. Drake Ramoray"} expertise={"Psychic"}/>
              <this.listItem drName={"Dr. Johnny Sins"} expertise={"Gynaecologist"}/>
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
 