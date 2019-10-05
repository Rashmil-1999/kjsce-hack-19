import React, {Component} from 'react';
import {
  View,
  ScrollView,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Theme from '../Theme';
export default class BookingScreen extends Component {
  componentDidMount() {}
  render() {
    return (
      <View style={{backgroundColor: Theme.bgColor, flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 10,
            marginHorizontal: 25,
            alignItems: 'center',
          }}>
          <Icon size={30} name="user-md" />
          <View style={{flex: 1, margin: 10}}>
            <Text style={{fontWeight: 'bold'}}>Dr. Viren Patel</Text>
            <Text style={{fontWeight: '100'}}>Cardiologist</Text>
          </View>
        </View>
        <View
          style={{
            marginVertical: 2,
            marginHorizontal: 50,
            flexDirection: 'row',
          }}>
          <View
            style={{
              width: 25,
              height: 25,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon size={20} name="graduation-cap" />
          </View>
          <Text style={{flex: 1, marginHorizontal: 10, fontSize: 12}}>
            12 Years of Experiance
          </Text>
        </View>
        <View
          style={{
            marginVertical: 2,
            marginHorizontal: 50,
            flexDirection: 'row',
          }}>
          <View
            style={{
              width: 25,
              height: 25,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon size={20} name="map-marker" />
          </View>
          <Text style={{flex: 1, marginHorizontal: 10, fontSize: 12}}>
            D.N. Nagar,Andheri West
          </Text>
        </View>
        <View
          style={{
            marginTop: 5,
            marginBottom: 10,
            marginHorizontal: 50,
            flexDirection: 'row',
          }}>
          <View
            style={{
              width: 25,
              height: 25,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon size={20} name="clock-o" />
          </View>
          <Text style={{flex: 1, marginHorizontal: 10, fontSize: 12}}>
            8:00am - 9:00pm
          </Text>
        </View>
        <View
          style={{
            margin: 30,
            height: 100,
            borderColor:Theme.textColor,
            borderWidth:0.5,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius:10
          }}>
          <Text style={{fontSize: 18, color: Theme.highlightColor}}>
            Current Token: 10
          </Text>
          <Text style={{fontSize: 18, color: Theme.highlightColor}}>
            Available Token: 21
          </Text>
        </View>
        <TextInput
        placeholder='Enter symptoms(If Any)'
        multiline={true}
          style={{
            marginHorizontal: 15,
            height: 50,
            margin: 10,
            backgroundColor: Theme.bgColor,
            borderWidth: 0.1,
            borderColor: Theme.textColor,
            borderRadius: 10,
            paddingHorizontal: 20,
            fontSize: 14,
          }}></TextInput>
          <TouchableOpacity style={{marginHorizontal:20,height:50,backgroundColor:Theme.highlightColor,justifyContent:'center',alignItems:'center'}}>
          <Text style={{color:Theme.bgColor}}>Book Now</Text>
          </TouchableOpacity>
      </View>
    );
  }
}
