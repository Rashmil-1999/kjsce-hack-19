import React, {Component} from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import Home from './screens/home';
import Reminders from './screens/reminders';
import Appointments from './screens/appointments';
import Profile from './screens/profile';
import Icon from 'react-native-vector-icons/FontAwesome';
import Theme from './Theme';
import BookingScreen from './screens/bookingScreen';
import Login from './screens/authentication';

const StackNavigator = createStackNavigator({
  login:{
    screen:Login,
  },
  app:{
    screen:createBottomTabNavigator({
      home:{
        screen:Home,
        navigationOptions: {
          title:'Home',
          tabBarIcon: ({tintColor}) => (
            <Icon name="home" color={tintColor} size={23} />
          ),
        },
      },
      reminders:{
        screen:Reminders,
        navigationOptions: {
          title:'Reminders',
          tabBarIcon: ({tintColor}) => (
            <Icon  name="clock-o" color={tintColor} size={23} />
          ),
        },
      },
      appointments:{
        screen:Appointments,
        navigationOptions: {
          title:'Appointments',
          tabBarIcon: ({tintColor}) => (
            <Icon  name="calendar-o" color={tintColor} size={23} />
          ),
        },
      },
      profile:{
        screen:Profile,
        navigationOptions: {
          title:'Profile',
          tabBarIcon: ({tintColor}) => (
            <Icon  name="user" color={tintColor} size={23} />
          ),
        },
      }
    },{
      animationEnabled:true,
      tabBarOptions: {
        activeTintColor: Theme.highlightColor,
      },
    })
  },
  bookingScreen:{
    screen:BookingScreen,
    navigationOptions:{
      title:'Book Appointment'
    }
  }
},{
  navigationOptions:{
    title:'DocsApp',
    headerStyle:{
      backgroundColor:Theme.highlightColor,
    },
    headerTintColor:Theme.bgColor
  }
})
export default class App extends Component {
  componentDidMount() {
    
  }
  render() {
    return (
      <View style={{flex: 1}}>
       <StackNavigator/>
      </View>
    );
  }
}