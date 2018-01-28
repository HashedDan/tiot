import React, {Component} from 'react';
import { View, Button, Image, Alert } from 'react-native';
import { Icon, Header } from 'react-native-elements';

class Login extends Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => <Icon name='home' size={24} />,
  };
  render () {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff'}}>
      </View>
    );
  }
}

module.exports = Login;