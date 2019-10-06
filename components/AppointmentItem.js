import Theme from "../Theme";
import React from 'react';
import {View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class AppointmentItem extends React.Component{

    constructor(props){
        super(props)
        console.log(props)
    }
    render(){
        return(
            <View style={{backgroundColor: Theme.bgColor, flexDirection: 'row', aligneItems: 'center', justifyContent: 'center', paddingVertical: 7}}>
                <View style={{flexDirection: 'column', marginHorizontal: 10, alignItems: 'center', marginTop: 4}}>
                    <Text style={{fontSize: 10, fontColor: 'black'}}>Token No</Text>
                    <Text style={{fontWeight: 'bold', fontSize: 18, fontColor: Theme.highlightColor, color: Theme.highlightColor}}>{this.props.tokenNo}</Text>
                </View>        
                <View style={{flexDirection: 'column', marginHorizontal: 14}}>
                    <Text style={{fontWeight: 'bold', fontSize: 18, fontColor: 'black'}}>{this.props.name}</Text>
                    <Text style={{fontStyle: 'bold', fontSize: 14, fontColor: 'black'}}>{`Ongoing token: ${this.props.currentToken?this.props.currentToken:0}`}</Text>
                </View>
                <View style={{flex: 1}}/>
                <View style={{backgroundColor: Theme.bgColor, flexDirection: 'column', marginHorizontal: 10, alignItems: 'center', marginTop: 4,justifyContent:'center'}}>
                    <Icon onPress={this.props.onDelete} name="times" size={25} color={Theme.highlightColor} />
                </View>
            </View>
        );
    }
}