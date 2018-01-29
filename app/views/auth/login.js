import React, {Component} from 'react';
import { View, Image, Alert, Text } from 'react-native';
import { Icon, Header, Card, Button } from 'react-native-elements';

class Login extends Component {
  render () {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff'}}>
        <Card title='Welcome!'>
          <Button
              icon={{name: 'code'}}
              backgroundColor='#03A9F4'
              fontFamily='Lato'
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='VIEW NOW' />
        </Card>
        <Text>Don't have an account?</Text>
        <Button
                onPress={() => this.props.navigation.navigate('SignUp')}
                title="SignUp"
              />
      </View>
    );
  }
}

module.exports = Login;