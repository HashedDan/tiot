import React, {Component} from 'react';
import { View, Button, Image, Text, ListView, StatusBar, Alert } from 'react-native';
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

    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      aVal: 'hey'
    };

    this.itemsRef = firebase.database().ref('players/');

    this.renderRow = this.renderRow.bind(this);
    this.updateRow = this.updateRow.bind(this);
  }

  componentDidMount() {
    var items = [];
    for (var x = 1; x <= 30; ++x) {
      items.push({
        pickNumber: x,
        _key: ''
      })
    }
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(items)
    });
  }

  updateRow(val) {
    var items = [];
    for (var x = 1; x <= 30; ++x) {
      if (x == val) {
        items.push({
          pickNumber: x + 1,
          _key: ''
        })
      }
      else {
        items.push({
          pickNumber: x,
          _key: ''
        })
      }
    }
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(items)
    });
  }

  renderRow (rowData, sectionID) {
    return (
      <ListItem
        roundAvatar
        key={rowData._key}
        title={rowData.pickNumber}
        subtitle={'Fill me!'}
        // avatar={{uri:rowData.picUrl}}
        // avatarContainerStyle={{paddingRight: 10}}
        leftIcon={{name: 'chevron-up', type: 'entypo'}}
        leftIconOnPress={() => Alert.alert("Move me up :)")}
        rightIcon={{name: 'chevron-down', type: 'entypo'}}
        onPressRightIcon={() => this.updateRow(rowData.pickNumber)}
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
        <ListView
          renderRow={this.renderRow}
          dataSource={this.state.dataSource}
        />
      </View>
    );
  }
}

module.exports = Builder;