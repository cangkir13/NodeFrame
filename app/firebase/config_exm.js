const firebase = require('firebase')

const config =  {
    apiKey: "YourKey",
    authDomain: "YourDomine",
    projectId: "projectId",
    storageBucket: "storageBucket",
    messagingSenderId: "messagingSenderId",
    appId: "appId"
};

let database = firebase.initializeApp(config)

module.exports = database