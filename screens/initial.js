import React, {Component} from 'react';
import {
  View,
  ScrollView,
  TextInput,
  Text,
  TouchableOpacity,
  FlatList,
  AsyncStorage,
} from 'react-native';
import Theme from '../Theme';
import Icon from 'react-native-vector-icons/FontAwesome';
import firebase from 'react-native-firebase';
import DialogManager from '../DialogManager';

export default class Initial extends Component{
    async componentDidMount(){
        let user = await firebase.firestore().collection('Users').doc(firebase.auth().currentUser.uid).get();
        console.log(user);
        if(user.exists){
            this.props.navigation.replace('app');
        }else{
            this.props.navigation.replace('makeProf');
        }
    }
    render(){
        return <View></View>
    }
}