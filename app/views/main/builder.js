import React, {Component} from 'react';
import { View, Button, Image, Text, FlatList, StatusBar, Alert, StyleSheet, Modal } from 'react-native';
import { Icon, Header, Card, List, ListItem } from 'react-native-elements';
import ActionButton from 'react-native-action-button';
import * as firebase from "firebase";
import Firebase from "../../firebase";

class Builder extends Component {
  static navigationOptions = {
    title: 'Builder',
  };
  constructor(props) {
    super(props);

    var items = [];
    for (var x = 1; x <= 60; ++x) {
      items.push({
        pickNumber: x,
        key: x-1,
        playerName: x + "Some Guy",
        team: "xxx",
      })
    }
    // var ds = new ListView.DataSource({
    //     rowHasChanged: (row1, row2) => row1.pickNumber !== row2.pickNumber,
    // });

    this.state = {
      dataSource: items,
      aVal: "hey",
      items: items,
      isVisible: false,
    };

    this.itemsRef = firebase.database().ref('fullOrder/');

    this.renderItem = this.renderItem.bind(this);
    this.updateRow = this.updateRow.bind(this);
    this.listenForItems = this.listenForItems.bind(this);
  }

  componentDidMount() {
    console.log("HERE");
    console.log(this.itemsRef);
    this.listenForItems(this.itemsRef);
  }

  listenForItems(itemsRef) {
    itemsRef.on('value', (snap) => {

      // get children as an array
      var items = [];
      var i = 1;
      snap.forEach((child) => {
        items.push({
          pickNumber: i,
          key: i-1,
          playerName: "Player" + i,
          team: child.val()
        });
        console.log(child.val());
        console.log(i);
        i++;
      });
      this.setState({
        dataSource: items,
        items: items
      });

    });
  }

  updateRow(val, up) {
    var newItems = [];
    newItems = this.state.items.slice();
    var first = newItems[val];
    var firstTeam = first.team;

    if (up && newItems[val].pickNumber != 1) {
      var second = newItems[val-1];
      var secondTeam = second.team;
      first.key--;
      first.pickNumber--;
      first.team = secondTeam;
      second.key++;
      second.pickNumber++;
      second.team = firstTeam;
      newItems[val] = second;
      newItems[val-1] = first;
    }
    else if (!up) {
      var second = newItems[val+1];
      var secondTeam = second.team;
      first.key++;
      first.pickNumber++;
      first.team = secondTeam;
      second.key--;
      second.pickNumber--;
      second.team = firstTeam;
      newItems[val] = second;
      newItems[val+1] = first;
    }
    this.setState({
      dataSource: newItems,
      items: newItems
    });
  }

  openModal() {
    this.setState({isVisible:true});
  }

  closeModal() {
    this.setState({isVisible:false});
  }

  renderItem ({item}) {
    return (
      <ListItem
        roundAvatar
        key={item.key}
        title={item.pickNumber + ". " + item.playerName}
        subtitle={item.team}
        onPress={() => this.openModal()}
        // avatar={{uri:item.picUrl}}
        // avatarContainerStyle={{paddingRight: 10}}
        leftIcon={{name: 'chevron-up', type: 'entypo'}}
        leftIconOnPress={() => this.updateRow(item.key, true)}
        rightIcon={{name: 'chevron-down', type: 'entypo'}}
        onPressRightIcon={() => this.updateRow(item.key, false)}
      />
    )
  }


  render () {
    console.log(firebase.auth().currentUser.email);
    return (
      <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 20 }}>
        <Modal
            visible={this.state.isVisible}
            animationType={'slide'}
            onRequestClose={() => this.closeModal()}
        >
          <View style={styles.modalContainer}>
            <View style={styles.innerContainer}>
              <Text>Search for a player to be selected!</Text>
              <Button
                  onPress={() => this.closeModal()}
                  title="Close modal"
              >
              </Button>
            </View>
          </View>
        </Modal>
        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{this.state.aVal}</Text>
        <Button
                onPress={() => this.setState({aVal: 'yo'})}
                title="Change Name"
              />
        <Button
          onPress={() => this.setState({aVal: 'yo'})}
          title="Reset"
        />
        <FlatList
          data={this.state.dataSource}
          extraData={this.state}
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  innerContainer: {
    alignItems: 'center',
  },
});

module.exports = Builder;