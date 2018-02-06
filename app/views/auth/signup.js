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
      <View style={{ flex: 1, backgroundColor: '#fff'}}>
      	<Text>SignUp</Text>
      </View>
    );
  }
}

module.exports = SignUp;