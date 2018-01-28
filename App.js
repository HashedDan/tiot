import React, {Component} from 'react';
import { StyleSheet, Text, ScrollView, View, TextInput, Button, Alert, Image } from 'react-native';
import { Icon, Header, List, ListItem, SearchBar } from 'react-native-elements';
import { DrawerNavigator } from 'react-navigation';

class HomeScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => <Icon name='rowing' size={24} />,
  };
  render () {
    const list = [
      {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
      },
      {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
      },
    ];
    return (
      <View style={styles.container}>
        
        <Button
                onPress={() => this.props.navigation.navigate('DrawerToggle')}
                title="Show Menu"
              />
      </View>
    );
  }
}

class ProfileScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Profile',
  };
  render () {
    return (
      <View style={styles.container}>
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
                  onPress={() => this.props.navigation.navigate('DrawerToggle')}
                  title="Go back home"
                />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  icon: {
    width: 26,
    height: 26,
  },
});

const App = DrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
  Notifications: {
    screen: ProfileScreen,
  },
});

export default App;