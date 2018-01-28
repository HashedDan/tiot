import React, {Component} from 'react';
import { StyleSheet, Text, ScrollView, View, TextInput, Button, Alert, Image } from 'react-native';
import { Icon, Header, List, ListItem, SearchBar } from 'react-native-elements';
import { DrawerNavigator } from 'react-navigation';

import Home from "./includes/views/home";
import Profile from "./includes/views/profile";

const App = DrawerNavigator({
  Home: {
    screen: Home,
  },
  Profile: {
    screen: Profile,
  },
});

export default App;