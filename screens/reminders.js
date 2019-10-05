import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Theme from '../Theme';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class Reminders extends Component {
  componentDidMount() {}
  listItem = props => {
    return (
      <View
        style={{
          backgroundColor: Theme.bgColor,
          elevation: 5,
          margin: 10,
          borderRadius: 10,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{marginHorizontal: 15, marginVertical:5,fontWeight: 'bold', fontSize: 18, flex: 1}}>
            Medicine Name
          </Text>
          <Text  style={{marginHorizontal: 15, marginVertical:5,fontWeight: 'normal', fontSize: 14}}>
            1-0-1
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 0,
            marginHorizontal: 25,
            alignItems: 'center',
          }}>
          <Icon size={30} name="user-md" />
          <View style={{flex: 1, margin: 10}}>
            <Text style={{fontWeight: 'bold'}}>Dr. Viren Patel</Text>
            <Text style={{fontWeight: '100'}}>Cardiologist</Text>
          </View>
        </View>
        <Text style={{paddingLeft:15,paddingVertical:10}}>Some Note by Doctor</Text>
      </View>
    );
  };
  render() {
    return (
      <View style={{flex: 1, backgroundColor: Theme.bgColor}}>
        <this.listItem />
      </View>
    );
  }
}
