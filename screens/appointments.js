import React, {Component} from 'react';
import {View} from 'react-native';
import AppointmentItem from '../components/AppointmentItem'

export default class Appointments extends Component {
    componentDidMount() {
      
    }

    render() {
      return (
        <View style={{flex: 1}}>
          <AppointmentItem data={{token: 12, drName: "Dr. Name", ongoingToken: 10, appntTime: "18:30"}}/>
          <AppointmentItem data={{token: 12, drName: "Dr. Name", ongoingToken: 10, appntTime: "18:30"}}/>
          <AppointmentItem data={{token: 12, drName: "Dr. Name", ongoingToken: 10, appntTime: "18:30"}}/>
        </View>
      );
    }
  }