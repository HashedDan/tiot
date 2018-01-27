import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, Image } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements'

class HomeScreen extends Component {
  render () {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, backgroundColor: 'blue', justifyContent: 'center' }}>
          <Button title="Click Me"
            onPress= { () =>
              Alert.alert('hey')
            }
          />
          <Icon
            raised
            name='heartbeat'
            type='font-awesome'
            color='#f50'
            onPress={() => console.log('hello')} />
        </View>
        <View style={{ flex: 1, backgroundColor: 'green' }}/>
        <View style={{ flex: 1, backgroundColor: 'red' }}/>
        <View style={{ flex: 1, backgroundColor: 'purple' }}/>
      </View>
      
    );
  }
}

class Greeting extends Component {
  constructor(props) {
    super(props);
    if (this.props.name == 'Daniel') {
      this.state = {name:'Master'};
    }
    else {
      this.state= {name: 'imposter'};
    }
  }

  render () {
    return (
      <Text style={this.props.style}>Hey there {this.state.name}.</Text>
    );
  }
}

class TopBox extends Component {
  render () {
    return (
      <Text style={{color: 'white'}}>Top Half</Text>
    );
  }
}

const App = TabNavigator(
  {
    Home: {
      screen: HomeScreen,
      tabBarIcon: () => <Icon
            raised
            name='heartbeat'
            type='font-awesome'
            color='#f50'
            onPress={({tintColor}) => console.log('hello')} />,
      tabBarLabel: 'Home'
    },
  },
  {
    initialRouteName: 'Home',
    tabBarPosition: "bottom",
    swipeEnabled: true,
    animationEnabled: true,
    lazy: true,
    order: ["Home"],
    backBehavior: "initialRoute",
    tabBarOptions: {
      activeTintColor: '#e91e63',
      activeBackgroundColor: '#e91e63',
      labelStyle: {
          fontSize: 12,
        },
        style: {
          backgroundColor: 'blue',
        },
      // inactiveTintColor: '#e91e63',
      showLabel: true,
      showIcon: true,
      upperCaseLabel: false,
      // pressColor: '#000',
      scrollEnabled: false,
    }
  }
);

export default App;



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
