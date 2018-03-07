import React, {Component} from 'react';
import { View, Button, Image, Text, FlatList, StatusBar, Alert, StyleSheet } from 'react-native';
import { Icon, Header, Card, List, ListItem } from 'react-native-elements';
import ActionButton from 'react-native-action-button';
import * as firebase from "firebase";
import Firebase from "../../firebase";

class Home extends Component {
  // static navigationOptions = {
  //   title: 'Home',
  //   tabBarVisible: false,
  // };
  constructor(props) {
    super(props);

    this.state = {
      dataSource: []
    };

    this.itemsRef = firebase.database().ref('players/');
  }

  componentDidMount() {
    this.listenForItems(this.itemsRef);
  }

  listenForItems(itemsRef) {
    itemsRef.on('value', (snap) => {

      // get children as an array
      var items = [];
      snap.forEach((child) => {
        items.push({
          name: child.val().name,
          position: child.val().position,
          team: child.val().team,
          picUrl: child.val().picture,
          key: child.key
        });
      });
      console.log("YO");
      this.setState({
        dataSource: items
      });

    });
  }

  renderItem ({item}) {
    return (
      <ListItem
        roundAvatar
        key={item.key}
        title={item.name}
        subtitle={item.position + ', ' + item.team}
        avatar={{uri:item.picUrl}}
        onPressRightIcon={() => console.log("More info on " + item.key)}
      />
    )
  }


  render () {
    console.log(firebase.auth().currentUser.email);
    return (
      <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 20}}>
        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Most Drafted Players</Text>
        <FlatList
          data={this.state.dataSource}
          renderItem={this.renderItem}
        />

        <ActionButton buttonColor="rgba(0,0,0,1)" backdrop={<View style={{flex: 1, alignItems: 'center'}}>
        <Image
                    style={{flex: 1, alignSelf: 'stretch', width: undefined, height: undefined}}
                    source={require('../../assets/MockMaven.png')}
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
module.exports = Home;