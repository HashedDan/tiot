import React, {Component} from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

import Login from './views/auth/login';
import SignUp from './views/auth/signup';
import Home from './views/main/home';
import Profile from './views/main/profile';

export const authNav = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      title: "Log In",
    }
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      title: "Sign Up",
    }
  }
});

export const mainNav = DrawerNavigator({
  Home: {
    screen: Home,
  },
  Profile: {
    screen: Profile,
  },
});