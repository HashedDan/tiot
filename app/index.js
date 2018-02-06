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
  }

  componentWillMount() {
  	console.log(this.state.signedIn);
  	console.log();
  	firebase.auth.onAuthStateChanged((user) => {
  		if (user) {
  			this.state.signedIn = true;
  			this.state.checkedSignIn = true;
  		}
  		else {
  			this.state.checkedSignIn = true;
  		}
  	});
  }

  render() {
    const { checkedSignIn, signedIn } = this.state;

    // // If we haven't checked AsyncStorage yet, don't render anything (better ways to do this)
    if (!checkedSignIn) {
      return null;
    }

    const Layout = createRootNavigator(signedIn);
    return <Layout />;
  }
}