import React, {Component} from 'react';
import { View, Button, Image, Text, ListView, StatusBar, Alert } from 'react-native';
import { Icon, Header, Card, List, ListItem } from 'react-native-elements';
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
      <View style={{ flex: 1, backgroundColor: '#fff'}}>
        <Header
          leftComponent={ <Icon
                            name='menu'
                            color='#fff'
                            onPress={() => this.props.navigation.navigate('DrawerToggle')} /> }
          centerComponent={ /*<Image
                              style={{width: 55, height: 20}}
                              source={require('../../assets/logo.png')} />*/ 
                              <Text style={{color: 'white', fontSize: 30 }}>Draftnik</Text>
                            }
          // rightComponent={ <Icon
          //                   type='entypo'
          //                   name='squared-plus'
          //                   color='#fff'
          //                   onPress={() => this.props.navigation.navigate('Builder')} /> }
          outerContainerStyles={{ backgroundColor: '#000' }}
        />
        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Hot Players Right Now</Text>
        <ListView
          renderRow={this.renderRow}
          dataSource={this.state.dataSource}
        />
      </View>
    );
  }
}

module.exports = Home;