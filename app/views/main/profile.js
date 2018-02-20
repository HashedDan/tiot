import React, {Component} from 'react';
import { View, Button, Image, Alert, StyleSheet } from 'react-native';
import { Icon, Header } from 'react-native-elements';
import ActionButton from 'react-native-action-button';

class Profile extends Component {
  static navigationOptions = {
    title: 'Profile',
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
        <ActionButton buttonColor="rgba(0,0,0,1)" backdrop={<View style={{flex: 1, alignItems: 'center'}}>
          <Image
                    style={{flex: 1}}
                    source={require('../../assets/MenuBG2.jpg')}
                  />

        </View>}>
          <ActionButton.Item buttonColor='#9b59b6' title="Home" onPress={() => this.props.navigation.navigate('Home')}>
            <Icon name='home' style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="Profile" onPress={() => this.props.navigation.navigate('Profile')}>
            <Icon name='person' style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#1abc9c' title="Builder" onPress={() => this.props.navigation.navigate('Builder')}>
            <Icon name='build' style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});

module.exports = Profile;