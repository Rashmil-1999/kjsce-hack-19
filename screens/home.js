import React, {Component} from 'react';
import {
  View,
  ScrollView,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import Theme from '../Theme';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class Home extends Component {
  componentDidMount() {}
  listItem = props => (
    <View style={{backgroundColor: Theme.bgColor, elevation: 5, margin: 10}}>
      <Icon
        size={25}
        name="star-o"
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
      <View style={{flexDirection: 'row-reverse'}}>
        <TouchableOpacity
          style={{
            width: 100,
            height: 30,
            backgroundColor: Theme.highlightColor,
            margin: 10,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: Theme.bgColor}}>Book</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  render() {
    return (
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        style={{flex: 1, backgroundColor: Theme.bgColor}}>
        <TextInput
          placeholder="Search Doctor"
          style={{
            marginHorizontal: 15,
            height: 50,
            margin: 10,
            backgroundColor: Theme.bgColor,
            borderWidth: 0.1,
            borderColor: Theme.textColor,
            borderRadius: 10,
            paddingHorizontal: 20,
            fontSize: 18,
          }}
        />
        <this.listItem />
      </ScrollView>
    );
  }
}
