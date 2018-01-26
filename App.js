import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

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

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <View style={{flex: 2, backgroundColor: 'skyblue'}} />
        <View style={{flex: 3, backgroundColor: 'steelblue'}} />
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
});
