import React, {Component} from 'react';
import { View, Image, Alert, Text } from 'react-native';
import { Icon, Header, Card, Button, FormLabel, FormInput } from 'react-native-elements';
import * as firebase from "firebase";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      response: ""
    };

    this.signup = this.signup.bind(this);
  }

  async signup() {
  	try {
  		console.log("yo");
  		await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);

  		this.setState({
  		  response: "Successful Signup!"
  		});
  		console.log("HERE");

  		setTimeout(() => {
  		  this.props.navigation.navigate('MainNav')
  		}, 1500);
  	}
  	catch (error) {
  		this.setState({
  		  response: error.toString(),
  		})
  		console.log(error.toString());
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
            onPress={() => this.signup()}
            title='Sign Up' />
        </Card>
      </View>
    );
  }
}

module.exports = SignUp;