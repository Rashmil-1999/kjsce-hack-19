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
import firebase from 'react-native-firebase';
import MakeProfile from './screens/MakeProfile';

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
      animationEnabled:true,
      tabBarOptions: {
        activeTintColor: Theme.highlightColor,
      },
    })
  },
  
  login:{
    screen:Login,
  },
  makeProf:{
    screen: MakeProfile
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
      backgroundColor:'white',
    },
    headerTintColor:'black'
  }
})
export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      authenticated:false,
    }
  }
  componentDidMount() {
    this.authListener = firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        this.setState({
          authenticated:true,
        })
      }else{
        this.setState({
          authenticated:false,
        })
      }
    })
  }
  render() {
    return (
      <View style={{flex: 1}}>
       {this.state.authenticated?<StackNavigator/>:<Login/>}
      </View>
    );
  }
}