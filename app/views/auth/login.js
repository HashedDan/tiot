import React, {Component} from 'react';
import { View, Button, Image, Alert, Text } from 'react-native';
import { Icon, Header } from 'react-native-elements';

class Login extends Component {
  render () {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff'}}>
        <Text>Login</Text>
        <Text>Don't have an account?</Text>
        <Button
                onPress={() => this.props.navigation.navigate('SignUp')}
                title="SignUp"
              />
      </View>
    );
  }
}

module.exports = Login;