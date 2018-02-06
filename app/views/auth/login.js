import React, {Component} from 'react';
import { View, Image, Alert, Text } from 'react-native';
import { Icon, Header, Card, Button, FormLabel, FormInput } from 'react-native-elements';
import * as firebase from "firebase";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      response: ""
    };

    this.login = this.login.bind(this);
  }

  async login() {
    try {
      await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);

      this.setState({
        response: "Successful Login"
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
          title='Welcome!'
          style={{ marginLeft: 50 }}>
          <Text style={{marginBottom: 10}}>
            Please login below to view your profile.
          </Text>
          <FormLabel>Email</FormLabel>
          <View>
            <FormInput
              // containerStyle={{ width: 200}}
              onChangeText={(email) => this.setState({email})} 
              keyboardType={'email-address'}
              autoCapitalize="none" />
          </View>
          <FormLabel>Password</FormLabel>
          <View>
            <FormInput
              // containerStyle={{ width: 200}}
              onChangeText={(password) => this.setState({password})}
              secureTextEntry={true}
              autoCapitalize="none" />
          </View>
          <Button
            icon={{name: 'code'}}
            backgroundColor='#03A9F4'
            fontFamily='Futura'
            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, marginTop: 10 }}
            onPress={() => this.login()}
            title='Log In' />
        </Card>
        <View style={{ marginTop: 20 }}>
          <Text style={{ color: 'white' }}>Don't have an account?</Text>
          <Button
                  onPress={() => this.props.navigation.navigate('SignUp')}
                  title="Sign Up"
                />
        </View>
      </View>
    );
  }
}

module.exports = Login;