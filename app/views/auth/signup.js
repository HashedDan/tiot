import React, {Component} from 'react';
import { View, Button, Image, Alert, Text } from 'react-native';
import { Icon, Header } from 'react-native-elements';
import * as firebase from "firebase";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      response: ""
    };

    this.login = this.login.bind(this);
  }

  async signup() {
  	try {
  		await firebase.auth().createUserWithEmailAndPassword(email, password);

  		this.setState({
  		  response: "Successful Signup!"
  		});

  		setTimeout(() => {
  		  this.props.navigation.navigate('MainNav')
  		}, 1500);
  	}
  	catch (error) {
  		this.setState({
  		  response: error.toString(),
  		})
  	}
  }

  render () {
    return (
      <View style={{ flex: 1, backgroundColor: '#000', alignItems: 'center' }}>
        <Card
          title='Welcome!'>
          <Text style={{marginBottom: 10}}>
            Please login below to view your profile.
          </Text>
          <FormLabel>Email</FormLabel>
          <View>
            <FormInput
              containerStyle={{ width: 200}}
              onChangeText={(email) => this.setState({email})} />
          </View>
          <FormLabel>Password</FormLabel>
          <View>
            <FormInput
              containerStyle={{ width: 200}}
              onChangeText={(password) => this.setState({password})} />
          </View>
          <Button
            icon={{name: 'code'}}
            backgroundColor='#03A9F4'
            fontFamily='Futura'
            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, marginTop: 10 }}
            onPress={() => this.signup}
            title='Log In' />
        </Card>
      </View>
    );
  }
}

module.exports = SignUp;