import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDqfnkQF3Gi2d4xlbtxbfo9_1uKTSACg_I",
    authDomain: "fir-todos-5cec9.firebaseapp.com",
    databaseURL: "https://fir-todos-5cec9.firebaseio.com",
    projectId: "fir-todos-5cec9",
    storageBucket: "fir-todos-5cec9.appspot.com",
    messagingSenderId: "143986293036"
};

export const firebaseApp = firebase.initializeApp(config);
export const itemRef = firebaseApp.database().ref("Todo");