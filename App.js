import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, Image } from 'react-native';
import { TabNavigator } from 'react-navigation';

class HomeScreen extends Component {
  static navigationOptions = {
    tabBarLabel: "Home",
    tabBarIcon: ({ tintColor }) => (
          <Image
            source={require('./assets/Astronaut.svg')}
            style={[styles.icon, {tintColor: tintColor}]}
          />
        ),
  };
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
    Home: { screen: HomeScreen },
  },
  {
    initialRouteName: 'Home',
    showLabel: true,
    showIcon: true,
  }
);

export default App;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
