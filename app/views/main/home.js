import React, {Component} from 'react';
import { View, Button, Image, Text, ListView, StatusBar, Alert, StyleSheet } from 'react-native';
import { Icon, Header, Card, List, ListItem } from 'react-native-elements';
import ActionButton from 'react-native-action-button';
import * as firebase from "firebase";
import Firebase from "../../firebase";

class Home extends Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => <Icon name='home' size={24} />,
  };
  constructor(props) {
    super(props);

    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
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
          _key: child.key
        });
      });

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(items)
      });

    });
  }

  renderRow (rowData, sectionID) {
    return (
      <ListItem
        roundAvatar
        key={rowData._key}
        title={rowData.name}
        subtitle={rowData.position + ', ' + rowData.team}
        avatar={{uri:rowData.picUrl}}
        onPressRightIcon={() => Alert.alert("More info on " + rowData._key)}
      />
    )
  }


  render () {
    console.log(firebase.auth().currentUser.email);
    return (
      <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 20}}>
        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Hot Players Right Now</Text>
        <ListView
          renderRow={this.renderRow}
          dataSource={this.state.dataSource}
        />

        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
            <Icon name='home' style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => this.props.navigation.navigate('Profile')}>
            <Icon name='person' style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => {}}>
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