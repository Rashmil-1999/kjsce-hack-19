import React, {Component} from 'react';
import {
  View,
  ScrollView,
  TextInput,
  Text,
  TouchableOpacity,
  FlatList,
  AsyncStorage,
} from 'react-native';
import Theme from '../Theme';
import Icon from 'react-native-vector-icons/FontAwesome';
import firebase from 'react-native-firebase';
import DialogManager from '../DialogManager';
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doctors: undefined,
      searchResult: undefined,
    };
  }
  componentDidMount() {
    let dialog = DialogManager.showProgressDialog('Fetching Information','Please wait...');
    firebase
      .firestore()
      .collection('Doctors')
      .orderBy('name')
      .get()
      .then(doctors => {
        this.setState({
          doctors: doctors.docs,
          searchResult:doctors.docs,
        },()=>{
          dialog.destroy();
        });
      });
  }
  search(query) {
    if (this.state.doctors) {
      let queryResult = this.state.doctors.filter(d => d.data().name.includes(query));
      this.setState({
        searchResult: queryResult,
      });
    }
  }
  listEmptyComponent = props=>{
      return <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <Icon name='frown-o' size={150} color={Theme.highlightColor}/>
          <Text>No Doctors found</Text>
      </View>
  }
  listItem = props => (
    <View style={{backgroundColor: Theme.bgColor, elevation: 5, margin: 10}}>
      <View
        style={{
          flexDirection: 'row',
          marginVertical: 10,
          marginHorizontal: 25,
          alignItems: 'center',
        }}>
        <Icon size={30} name="user-md" />
        <View style={{flex: 1, margin: 10}}>
          <Text style={{fontWeight: 'bold'}}>{props.data().name}</Text>
          <Text style={{fontWeight: '100'}}>{props.data().speciality}</Text>
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
              props.data().initialYear.seconds*1000,
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
          {props.data().address}
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
          {props.data().workingHours}
        </Text>
      </View>
      <View style={{flexDirection: 'row-reverse'}}>
        <TouchableOpacity
        onPress={()=>{
            this.props.navigation.navigate('bookingScreen',{doctor:props});
        }}
          style={{
            width: 100,
            height: 30,
            backgroundColor: Theme.highlightColor,
            margin: 10,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: Theme.bgColor}}>Book</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  render() {
    return (
      <View style={{flex: 1, backgroundColor: Theme.bgColor}}>
        <TextInput
        onChangeText={(text)=>{
            this.search(text);
        }}
          placeholder="Search Doctor"
          style={{
            marginHorizontal: 15,
            height: 50,
            margin: 10,
            backgroundColor: Theme.bgColor,
            borderWidth: 0.1,
            borderColor: Theme.textColor,
            borderRadius: 10,
            paddingHorizontal: 20,
            fontSize: 18,
          }}
        />
       <FlatList
       contentContainerStyle={{flexGrow:1}}
       data={this.state.searchResult}
       renderItem = {({item})=>{
           return this.listItem(item);
       }}
       keyExtractor={(item,index)=>{
           return index.toString();
       }}
       ListEmptyComponent={this.listEmptyComponent}
       />
      </View>
    );
  }
}
