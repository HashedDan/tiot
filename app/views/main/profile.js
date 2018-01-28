import React, {Component} from 'react';
import { View, Button, Image, Alert } from 'react-native';
import { Icon, Header } from 'react-native-elements';

class Profile extends Component {
  static navigationOptions = {
    drawerLabel: 'Profile',
    drawerIcon: ({ tintColor }) => <Icon name='ios-person' type="ionicon" size={24} />,
  };
  render () {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff'}}>
        <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center' }}>
          <Button title="Click Me"
            onPress= { () =>
              Alert.alert('hey')
            }
          />
          <Icon
            name='500px'
            type='entypo' />
          <Button
                  onPress={() => this.props.navigation.navigate('Home')}
                  title="Go back home"
                />
        </View>
      </View>
    );
  }
}

module.exports = Profile;