import Theme from "../Theme";
import React from 'react';
import {View, Text } from 'react-native';

export default class AppointmentItem extends React.Component{

    constructor(props){
        super(props)
    }
    render(){
        return(
            <View style={{backgroundColor: Theme.bgColor, flexDirection: 'row', aligneItems: 'center', justifyContent: 'center', paddingVertical: 7}}>
                <View style={{flexDirection: 'column', marginHorizontal: 10, alignItems: 'center', marginTop: 4}}>
                    <Text style={{fontSize: 10, fontColor: 'black'}}>Token No</Text>
                    <Text style={{fontWeight: 'bold', fontSize: 18, fontColor: Theme.highlightColor, color: Theme.highlightColor}}>{this.props.data.token}</Text>
                </View>        
                <View style={{flexDirection: 'column', marginHorizontal: 14}}>
                    <Text style={{fontWeight: 'bold', fontSize: 18, fontColor: 'black'}}>{this.props.data.drName}</Text>
                    <Text style={{fontStyle: 'bold', fontSize: 14, fontColor: 'black'}}>{`Ongoing token: ${this.props.data.ongoingToken}`}</Text>
                </View>
                <View style={{flex: 1}}/>
                <View style={{backgroundColor: Theme.bgColor, flexDirection: 'column', marginHorizontal: 10, alignItems: 'center', marginTop: 4}}>
                    <Text style={{fontSize: 10, fontColor: 'black'}}>Appointment</Text>
                    <Text style={{fontSize: 14, fontColor: 'black', fontStyle: 'bold'}}>{this.props.data.appntTime}</Text>
                </View>
            </View>
        );
    }
}