import * as firebase from 'firebase';
var Environment = require('./environment.js');

class Firebase {
    static initialize() {
      console.log(Environment.API_KEY);
        firebase.initializeApp({
            apiKey: Environment.API_KEY,
            authDomain: Environment.AUTH_DOMAIN,
            databaseURL: Environment.DATABASE_URL,
            projectId: Environment.PROJECT_ID,
            storageBucket: Environment.STORAGE_BUCKET,
            messagingSenderId: Environment.MESSAGING_SENDER_ID
        });
    }
}

module.exports = Firebase;