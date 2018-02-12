import React, {Component} from 'react';
import { View, Button, Image, Text } from 'react-native';
import { Icon, Header, Card } from 'react-native-elements';
import * as firebase from "firebase";

class Home extends Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => <Icon name='home' size={24} />,
  };
  constructor(props) {
    super(props);

    this.state = {
      person: firebase.auth().currentUser.email
    };
  }
  render () {
    console.log(firebase.auth().currentUser.email);
    return (
      <View style={{ flex: 1, backgroundColor: '#fff'}}>
        <Header
          leftComponent={ <Icon
                            name='menu'
                            color='#fff'
                            onPress={() => this.props.navigation.navigate('DrawerToggle')} /> }
          centerComponent={ <Image
                              style={{width: 55, height: 20}}
                              source={require('../../assets/logo.png')} /> }
          outerContainerStyles={{ backgroundColor: '#000' }}
        />
        <Text>{ this.state.person }</Text>
      </View>
    );
  }
}

module.exports = Home;