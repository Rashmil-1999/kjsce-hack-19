import React, {Component} from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import Home from './screens/home';
import Reminders from './screens/reminders';
import Appointments from './screens/appointments';
import Profile from './screens/profile';
import Icon from 'react-native-vector-icons/FontAwesome';
import Theme from './Theme';

const StackNavigator = createStackNavigator({
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
      tabBarOptions: {
        activeTintColor: Theme.highlightColor,
      },
    })
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