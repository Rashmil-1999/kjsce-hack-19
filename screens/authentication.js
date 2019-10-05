import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Theme from '../Theme';
import Icon from 'react-native-vector-icons/FontAwesome';
import {SimpleAnimation} from 'react-native-simple-animations';
import firebase from 'react-native-firebase';
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otpScreen: false,
      phone: '',
      otp: '',
    };
  }
  static navigationOptions = ({navigation}) => {
    return {
      header: null,
    };
  };
  enterOtpScreen = () => (
    <SimpleAnimation distance={100} direction="left" fade movementType="slide">
      <Text
        style={{
          color: Theme.textColor,
          fontSize: 35,
          marginHorizontal: 10,
          marginVertical: 5,
          fontWeight: 'bold',
        }}>
        Enter Otp Sent
      </Text>
      <Text
        style={{
          color: Theme.textColor,
          fontSize: 16,
          marginHorizontal: 10,
          marginVertical: 5,
        }}>
        We've sent otp to [Mobile No.].Please Enter it below.
        <Text
          onPress={() => {
            this.setState({
              otpScreen: false,
            });
          }}
          style={{color: Theme.highlightColor}}>
          Wrong Number?
        </Text>
      </Text>

      <View style={{marginTop: 20}}>
        <TextInput
          onChangeText={text => {
            if (text != null) {
              this.setState({
                otp: text,
              });
            }
          }}
          keyboardType="phone-pad"
          placeholder="Enter Otp"
          style={{
            marginHorizontal: 15,
            marginVertical: 15,
            borderColor: Theme.textColor,
            padding: 15,
            borderWidth: 1,
            borderRadius: 5,
          }}
        />
        <TouchableOpacity
          onPress={() => {
            if (this.verifier) {
              this.verifier.confirm(this.state.otp);
            } else {
              this.setState({
                otpScreen: false,
              });
            }
          }}
          style={{
            marginHorizontal: 20,
            marginVertical: 5,
            backgroundColor: Theme.highlightColor,
            borderRadius: 5,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: Theme.bgColor, fontSize: 18}}>Verify</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}></View>
    </SimpleAnimation>
  );
  enterMobileScreen = () => (
    <SimpleAnimation delay={500} duration={1000} fade staticType="zoom">
      <Text
        style={{
          color: Theme.textColor,
          fontSize: 35,
          marginHorizontal: 10,
          marginVertical: 5,
          fontWeight: 'bold',
        }}>
        Get Started
      </Text>
      <Text
        style={{
          color: Theme.textColor,
          fontSize: 16,
          marginHorizontal: 10,
          marginVertical: 5,
        }}>
        Our profession is the only one which works unceasingly to annihilate
        itself.
      </Text>

      <View style={{marginTop: 20}}>
        <TextInput
          value={this.state.phone}
          onChangeText={text => {
            if (!text.startsWith('+91') && text.length > 2) {
              text = '+91' + text;
            }
            this.setState({
              phone: text,
            });
          }}
          keyboardType="phone-pad"
          placeholder="Mobile No. "
          style={{
            marginHorizontal: 15,
            marginVertical: 15,
            borderColor: Theme.textColor,
            padding: 15,
            borderWidth: 1,
            borderRadius: 5,
          }}
        />
        <TouchableOpacity
          onPress={async () => {
            this.verifier = await firebase
              .auth()
              .signInWithPhoneNumber(this.state.phone, true);
            this.setState({
              otpScreen: true,
            });
          }}
          style={{
            marginHorizontal: 20,
            marginVertical: 5,
            backgroundColor: Theme.highlightColor,
            borderRadius: 5,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: Theme.bgColor, fontSize: 18}}>Get Started</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}></View>
    </SimpleAnimation>
  );
  render() {
    return (
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        style={{
          flex: 1,
          backgroundColor: Theme.bgColor,
          flexDirection: 'column-reverse',
          paddingBottom: 50,
        }}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Icon name="heartbeat" size={150} color={Theme.highlightColor} />
        </View>
        {this.state.otpScreen ? (
          <this.enterOtpScreen />
        ) : (
          <this.enterMobileScreen />
        )}
      </ScrollView>
    );
  }
}
