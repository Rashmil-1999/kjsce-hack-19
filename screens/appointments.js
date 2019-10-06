import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import AppointmentItem from '../components/AppointmentItem';
import firebase from 'react-native-firebase';

export default class Appointments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Appointments: [],
    };
  }
  componentDidMount() {
    this.didFocusSubscription = this.props.navigation.addListener(
      'didFocus',
      payload => {
        this.a();
      }
    );
    
  }
  componentWillUnmount(){
    this.didFocusSubscription.remove();
  }
  a = async () => {
    let doctors = await firebase
      .firestore()
      .collection('Doctors')
      .get();

    firebase
      .firestore()
      .collection('Appointments')
      .where('userId', '==', firebase.auth().currentUser.uid)
      .get()
      .then(appointments => {
        let appoin = [];
        appointments.docs.forEach(a => {
          let doc = doctors.docs.find(d => d.id == a.data().docId);
          appoin.push({...a.data(), ...doc.data(), id: a.id});
        });
        this.setState({
          Appointments: appoin,
        });
      });
  };
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        {
          <FlatList
            data={this.state.Appointments}
            renderItem={({item}) => {
              return (
                <AppointmentItem
                  onDelete={() => {
                    firebase
                      .firestore()
                      .collection('Appointments')
                      .doc(item.id)
                      .delete();
                    this.a();
                  }}
                  {...item}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return index.toString();
            }}
          />
        }
      </View>
    );
  }
}
