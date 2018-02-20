import React, {Component} from 'react';
import { View, Button, Image, Text, FlatList, StatusBar, Alert, StyleSheet } from 'react-native';
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
    for (var x = 1; x <= 30; ++x) {
      items.push({
        pickNumber: x,
        key: x-1,
        playerName: "Johnny Appleseed"
      })
    }

    // var ds = new ListView.DataSource({
    //     rowHasChanged: (row1, row2) => row1.pickNumber !== row2.pickNumber,
    // });

    this.state = {
      dataSource: items,
      aVal: "hey",
      items: items
    };

    this.itemsRef = firebase.database().ref('players/');

    this.renderItem = this.renderItem.bind(this);
    this.updateRow = this.updateRow.bind(this);
  }

  componentDidMount() {
    console.log("HERE");
  }

  updateRow(val, up) {
    var newItems = [];
    newItems = this.state.items.slice();
    if (up && newItems[val].pickNumber != 1) {
      console.log(val)
      console.log(newItems[val].key);
      newItems[val].pickNumber--;
    }
    else if (!up) {
      console.log(val)
      console.log(newItems[val].key);
      newItems[val].pickNumber++;
    }

    this.setState({
      dataSource: newItems,
      items: newItems
    });
  }

  renderItem ({item}) {
    return (
      <ListItem
        roundAvatar
        key={item.key}
        title={item.pickNumber + ". " + item.playerName}
        subtitle={'Fill me!'}
        onPress={() => Alert.alert("TEST")}
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
      <View style={{ flex: 1, backgroundColor: '#fff'}}>
        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{this.state.aVal}</Text>
        <Button
                onPress={() => this.setState({aVal: 'yo'})}
                title="Change Name"
              />
        <FlatList
          data={this.state.dataSource}
          renderItem={this.renderItem}
        />
        <ActionButton buttonColor="rgba(0,0,0,1)" backdrop={<View style={{flex: 1}}>
          <Image
                    style={{flex: 1}}
                    source={require('../../assets/MenuBG.jpg')}
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

module.exports = Builder;