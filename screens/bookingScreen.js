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
import firebase from 'react-native-firebase';
import DialogManager from '../DialogManager';
export default class BookingScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            appointments:[],
            symptoms:'',
            currentToken:'',
        }
    }
  componentDidMount() {
    let dialog = DialogManager.showProgressDialog('Fetching Information','Please wait...');
    let today = new Date();
    today.setHours(0);
    today.setMinutes(0);
    today.setSeconds(0);
    firebase.firestore().collection('Appointments').where('docId','==',this.props.navigation.state.params.doctor.id).get().then(async (appointments)=>{
        let appoints = appointments.docs.filter(a=>new Date(a.data().date.seconds*1000) >= today);
        let doc = await firebase.firestore().collection('Doctors').doc(this.props.navigation.state.params.doctor.id).get();
        this.setState({
            currentToken:doc.data().currentToken?doc.data().currentToken:0,
        })
        this.setState({
            appointments:appoints,
        })
    })
    dialog.destroy();
  }
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
            <Text style={{fontWeight: 'bold'}}>{this.props.navigation.state.params.doctor.data().name}</Text>
            <Text style={{fontWeight: '100'}}>{this.props.navigation.state.params.doctor.data().speciality}</Text>
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
          {`${new Date().getFullYear() -
            new Date(
              this.props.navigation.state.params.doctor.data().initialYear.seconds*1000,
            ).getFullYear()} Years of Experiance`}
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
            {this.props.navigation.state.params.doctor.data().address}
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
          {this.props.navigation.state.params.doctor.data().workingHours}
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
            {`Current Token: ${this.state.currentToken}`}
          </Text>
          <Text style={{fontSize: 18, color: Theme.highlightColor}}>
            {`Available Token: ${this.state.appointments.length+1}`}
          </Text>
        </View>
        <TextInput
        onChangeText={(text)=>{
            this.setState({
                symptoms:text,
            })
        }}
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
          <TouchableOpacity onPress={()=>{
              firebase.firestore().collection('Appointments').add({
                  docId:this.props.navigation.state.params.doctor.id,
                  userId:firebase.auth().currentUser.uid,
                  date:new Date(),
                  tokenNo:this.state.appointments.length+1,
                  attended:false,
                  symptoms:this.state.symptoms
              }).then(()=>{
                  this.props.navigation.goBack();
              })
          }} style={{marginHorizontal:20,height:50,backgroundColor:Theme.highlightColor,justifyContent:'center',alignItems:'center'}}>
          <Text style={{color:Theme.bgColor}}>Book Now</Text>
          </TouchableOpacity>
      </View>
    );
  }
}
