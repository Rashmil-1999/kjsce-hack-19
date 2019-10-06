import React, {Component} from 'react';
import {View, Text,FlatList} from 'react-native';
import Theme from '../Theme';
import Icon from 'react-native-vector-icons/FontAwesome';
import firebase from 'react-native-firebase';
export default class Reminders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      medicines: [],
      doctors:[],
    };
  }
  needsToTakeNow(s){
    let date = new Date();
    if(date.getHours() < 15 ){
      return s.split('-')[0] == '1'
    }else if(date.getHours() >= 15 && date.getHours() < 18){
      return s.split('-')[1] == '1'
    }else if(date.getHours() >= 18 && date.getHours() <= 24){
      return s.split('-')[2] == '1'
    }
  }
  componentDidMount() {
    async ()=>{
    let doctors = await firebase.firestore().collection('Doctors').get();
    firebase
      .firestore()
      .collection('Prescriptions')
      .where('userId', '==', firebase.auth().currentUser.uid)
      .get()
      .then(prescriptions => {
        let meds = [];
        prescriptions.forEach(p => {
          meds.push(p.data().medicines);
        });
        let today = new Date();
        today.setHours(0);
        today.setMinutes(0);
        today.setSeconds(0);
        meds = meds.filter(
          m => new Date(m.endDate.seconds * 1000) > today,
        );
        meds = meds.sort((m,n)=>this.needsToTakeNow(m.repeats));
        meds = meds.map((m)=>{
          let doc = doctors.docs.find((d)=>d.id == m.docId);
          return {
            ...doc,
            ...m
          }
        })
      });
    }
  }
  listItem = props => {
    return (
      <View
        style={{
          backgroundColor: this.needsToTakeNow(props.repeats)?'green':Theme.bgColor,
          elevation: 5,
          margin: 10,
          borderRadius: 10,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              marginHorizontal: 15,
              marginVertical: 5,
              fontWeight: 'bold',
              fontSize: 18,
              flex: 1,
            }}>
            {props.medicineName}
          </Text>
          <Text
            style={{
              marginHorizontal: 15,
              marginVertical: 5,
              fontWeight: 'normal',
              fontSize: 14,
            }}>
            {props.repeats}
          </Text>
        </View>
        <Text style={{marginHorizontal: 15}}>
          {`ends: ${new Date(props.endDate.seconds * 1000).toLocaleDateString()}`}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 0,
            marginHorizontal: 25,
            alignItems: 'center',
          }}>
          <Icon size={30} name="user-md" />
          <View style={{flex: 1, margin: 10}}>
            <Text style={{fontWeight: 'bold'}}>{props.name}</Text>
            <Text style={{fontWeight: '100'}}>{props.speciality}</Text>
          </View>
        </View>
        <Text style={{paddingLeft: 15, paddingVertical: 10}}>
          {props.note}
        </Text>
      </View>
    );
  };
  listEmptyComponent = props=>{
    return <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Icon name='smile-o' size={150} color={Theme.highlightColor}/>
        <Text>No Medicines to take</Text>
    </View>
}
  render() {
    return (
      <View style={{flex: 1, backgroundColor: Theme.bgColor}}>
        <FlatList
        contentContainerStyle={{flexGrow:1}}
        data={this.state.medicines}
        renderItem = {({item})=>{
          return this.listItem(item);
        }}
        keyExtractor = {(Item,index)=>{return index.toString()}}
        ListEmptyComponent={this.listEmptyComponent}
        />
      </View>
    );
  }
}
