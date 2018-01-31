import React, {Component} from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Login from './views/auth/login';
import SignUp from './views/auth/signup';
import Home from './views/main/home';
import Profile from './views/main/profile';

const AuthNav = StackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        title: "Log In",
        headerStyle: { backgroundColor: '#000' },
        headerTitleStyle: { color: 'white'},
      }
    },
    SignUp: {
      screen: SignUp,
      navigationOptions: {
        title: "Sign Up",
      }
    },
  },
  {
    // Options go here
    // headerMode: 'none',
  }
);

const MainNav = DrawerNavigator({
  Home: {
    screen: Home,
  },
  Profile: {
    screen: Profile,
  },
});

const createRootNavigator = (signedIn = false) => {
  return StackNavigator(
    {
      MainNav: {
        screen: MainNav,
        navigationOptions: {
          gesturesEnabled: false
        }
      },
      AuthNav: {
        screen: AuthNav,
        navigationOptions: {
          gesturesEnabled: false
        }
      }
    },
    {
      headerMode: "none",
      mode: "modal",
      initialRouteName: signedIn ? "MainNav" : "AuthNav"
    }
  );
};

module.exports = { AuthNav, MainNav, createRootNavigator };