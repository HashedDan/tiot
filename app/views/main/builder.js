import React, {Component} from 'react';
import { View, Button, Image, Text, FlatList, StatusBar, Alert } from 'react-native';
import { Icon, Header, Card, List, ListItem } from 'react-native-elements';
import * as firebase from "firebase";
import Firebase from "../../firebase";

class Builder extends Component {
  static navigationOptions = {
    drawerLabel: 'Builder',
    drawerIcon: ({ tintColor }) => <Icon name='md-hammer' type='ionicon' size={24} />,
  };
  constructor(props) {
    super(props);

    var items = [];
    for (var x = 1; x <= 30; ++x) {
      items.push({
        pickNumber: x,
        key: x-1
      })
    }

    // var ds = new ListView.DataSource({
    //     rowHasChanged: (row1, row2) => row1.pickNumber !== row2.pickNumber,
    // });

    this.state = {
      dataSource: items,
      aVal: 'hey',
      items: items
    };

    this.itemsRef = firebase.database().ref('players/');

    this.renderRow = this.renderRow.bind(this);
    this.updateRow = this.updateRow.bind(this);
  }

  componentDidMount() {
    console.log("HERE");
  }

  updateRow(val, up) {
    console.log(this.state.items[val]);
    console.log(val);
    var newItems = [];
    newItems = this.state.items.slice();
    if (up) {
      newItems[val].pickNumber--;
    }
    else {
      console.log(val)
      console.log(newItems[val].key);
      newItems[val].pickNumber++;
    }

    this.setState({
      dataSource: newItems,
      items: newItems
    });
  }

  renderRow (rowData, sectionID) {
    return (
      <ListItem
        roundAvatar
        key={rowData.key}
        title={rowData.pickNumber}
        subtitle={'Fill me!'}
        // avatar={{uri:rowData.picUrl}}
        // avatarContainerStyle={{paddingRight: 10}}
        leftIcon={{name: 'chevron-up', type: 'entypo'}}
        leftIconOnPress={() => Alert.alert("Move me up :)")}
        rightIcon={{name: 'chevron-down', type: 'entypo'}}
        onPressRightIcon={() => this.updateRow(rowData.key, false)}
      />
    )
  }


  render () {
    console.log(firebase.auth().currentUser.email);
    return (
      <View style={{ flex: 1, backgroundColor: '#fff'}}>
        <Header
          leftComponent={ <Icon
                            name='menu'
                            color='#fff'
                            onPress={() => this.props.navigation.navigate('DrawerToggle')} /> }
          outerContainerStyles={{ backgroundColor: '#000' }}
        />
        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{this.state.aVal}</Text>
        <Button
                onPress={() => this.setState({aVal: 'yo'})}
                title="Change Name"
              />
        <FlatList
          renderItem={this.renderRow}
          data={this.state.dataSource}
        />
      </View>
    );
  }
}

module.exports = Builder;