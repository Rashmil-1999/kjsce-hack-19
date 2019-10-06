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
    this.a();
  }
  a = async ()=>{
    let doctors = await firebase.firestore().collection('Doctors').get();
    firebase
      .firestore()
      .collection('Prescription')
      .where('userId', '==', firebase.auth().currentUser.uid)
      .get()
      .then(prescriptions => {
        let meds = [];
        prescriptions.forEach(p => {
          meds = meds.concat(p.data().medicines).map((d)=>{
            return {
              ...d,docId:p.data().docId,
            }
          });
        });
        let today = new Date();
        today.setHours(0);
        today.setMinutes(0);
        today.setSeconds(0);
        meds = meds.filter(
          m => new Date(m.endDate.seconds * 1000) > today,
        );
        let sortedmeds = [];
        meds.forEach((m)=>{
          if(this.needsToTakeNow(m.repeats)){
            sortedmeds.unshift(m);
          }else{
            sortedmeds.push(m);
          }
        })

        meds = sortedmeds.map((m)=>{
          console.log(m);
          let doc = doctors.docs.find((d)=>{console.log(String(d.id) == String(m.docId));return (String(d.id) == String(m.docId))});
          console.log(doc);
          return {
            doctor:doc.data(),
            medicine:m
          }
        })
        this.setState({
          medicines:meds,
        })
      });
    }
  listItem = props => {
    console.log(props.repeats);
    return (
      <View
        style={{
          backgroundColor: Theme.bgColor,
          elevation: 5,
          margin: 10,
          borderRadius: 10,
          borderWidth:3,
          borderColor:this.needsToTakeNow(props.medicine.repeats)?'green':Theme.bgColor,
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
            {props.medicine.name}
          </Text>
          <Text
            style={{
              marginHorizontal: 15,
              marginVertical: 5,
              fontWeight: 'normal',
              fontSize: 14,
            }}>
            {props.medicine.repeats}
          </Text>
        </View>
        <Text style={{marginHorizontal: 15}}>
          {`ends: ${new Date(props.medicine.endDate.seconds * 1000).toLocaleDateString()}`}
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
            <Text style={{fontWeight: 'bold'}}>{props.doctor.name}</Text>
            <Text style={{fontWeight: '100'}}>{props.doctor.speciality}</Text>
          </View>
        </View>
        <Text style={{paddingLeft: 15, paddingVertical: 10}}>
          {props.medicine.notes}
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
