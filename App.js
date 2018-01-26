import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Greeting extends React Component {
  render () {
    return (
      <Text>Good to see ya!</Text>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello World.</Text>
        <Greeting/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
