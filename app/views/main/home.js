import React, {Component} from 'react';
import { View, Button, Image, Text, ListView, StatusBar } from 'react-native';
import { Icon, Header, Card, List, ListItem } from 'react-native-elements';
import * as firebase from "firebase";

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
  }

  componentDidMount() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows([{ title: 'Pizza' }, {title: 'Spaghetti'}])
    })
  }

  renderRow (rowData, sectionID) {
    return (
      <ListItem
        roundAvatar
        key={sectionID}
        title={rowData.title}
        subtitle={rowData.subtitle}
        avatar={{uri:rowData.avatar_url}}
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
          centerComponent={ <Image
                              style={{width: 55, height: 20}}
                              source={require('../../assets/logo.png')} /> }
          outerContainerStyles={{ backgroundColor: '#000' }}
        />
        <Text>Hot Players Right Now</Text>
        <ListView
          renderRow={this.renderRow}
          dataSource={this.state.dataSource}
        />
      </View>
    );
  }
}

module.exports = Home;