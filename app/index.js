import React, {Component} from 'react';
import { createRootNavigator } from './router.js';
import * as firebase from "firebase";
import Firebase from "./firebase";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    Firebase.initialize();

    this.state = {
      signedIn: false,
      checkedSignIn: false
    };

    this.getAuthInfo();
    this.getAuthInfo = this.getAuthInfo.bind(this);
  }

  getAuthInfo() {
  	console.log(this.state.signedIn);
  	firebase.auth().onAuthStateChanged((user) => {
  		if (user) {
  			this.state.signedIn = true;
  			this.state.checkedSignIn = true;
  			console.log("one");
  		}
  		else {
  			this.state.signedIn = true;

  			this.state.checkedSignIn = true;
  			console.log("two");
  		}
  	});
  }

  render() {
    const { checkedSignIn, signedIn } = this.state;

    const Layout = createRootNavigator(signedIn);
    return <Layout />;
  }
}