import React, {Component} from 'react';
import {View,Alert,Platform} from 'react-native';
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
import Initial from './screens/initial';
const StackNavigator = createStackNavigator({
  initial:{
    screen:Initial
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
  login:{
    screen:Login,
  },
  makeProf:{
    screen: MakeProfile,
    navigationOptions:{
      title:'Profile'
    }
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
    // Create notification channel required for Android devices
    this.createNotificationChannel();
  
    // Ask notification permission and add notification listener
    this.checkPermission();
    this.setReminder();
  }
  createNotificationChannel = () => {
    // Build a android notification channel
    const channel = new firebase.notifications.Android.Channel(
      "reminder", // channelId
      "Reminders Channel", // channel name
      firebase.notifications.Android.Importance.High // channel importance
    ).setDescription("Used for getting reminder notification"); // channel description
    // Create the android notification channel
    firebase.notifications().android.createChannel(channel);
  };
  
  checkPermission = async () => {
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
      // We've the permission
      this.notificationListener = firebase
        .notifications()
        .onNotification(async notification => {
          // Display your notification
          await firebase.notifications().displayNotification(notification);
        });
    } else {
      // user doesn't have permission
      try {
        await firebase.messaging().requestPermission();
      } catch (error) {
        Alert.alert("Unable to access the Notification permission. Please enable the Notification Permission from the settings");
      }
    }
  };
  setReminder = async () => {
    let morning = new Date();
    //morning.setHours(13,0,0,0);
    let afternoon = new Date();
    afternoon.setHours(17,0,0,0);
    let evening = new Date();
    afternoon.setHours(21,0,0,0);
      // schedule notification       
      firebase.notifications().scheduleNotification(this.buildNotification(), {
        fireDate: morning.getTime(),
        repeatInterval: 'day',
        exact: true,
      });
      firebase.notifications().scheduleNotification(this.buildNotification(), {
        fireDate: afternoon.getTime(),
        repeatInterval: 'day',
        exact: true,
      });
      firebase.notifications().scheduleNotification(this.buildNotification(), {
        fireDate: evening.getTime(),
        repeatInterval: 'day',
        exact: true,
      });
  };
  buildNotification = () => {
    const title = Platform.OS === "android" ? "Medicine Reminder" : "";
    const notification = new firebase.notifications.Notification()
      .setNotificationId("1") // Any random ID
      .setTitle(title) // Title of the notification
      .setBody("Please take your medicines its time!") // body of notification
      .android.setPriority(firebase.notifications.Android.Priority.High) // set priority in Android
      .android.setChannelId("reminder") // should be the same when creating channel for Android
      .android.setAutoCancel(true); // To remove notification when tapped on it
      return notification;
  };
  render() {
    return (
      <View style={{flex: 1}}>
       {this.state.authenticated?<StackNavigator/>:<Login/>}
      </View>
    );
  }
}