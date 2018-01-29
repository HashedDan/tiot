import React, {Component} from 'react';
import { View, Button, Image } from 'react-native';
import { Icon, Header, Card } from 'react-native-elements';

class Home extends Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => <Icon name='home' size={24} />,
  };
  render () {
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
      </View>
    );
  }
}

module.exports = Home;