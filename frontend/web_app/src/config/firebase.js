// import firebase from "firebase/app";
import firebase from "firebase";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {

	apiKey: "AIzaSyCaHVnrSIsAE1MSpjC_Te4VoIAwrnMTM0Y",
    authDomain: "programmers-network.firebaseapp.com",
    databaseURL: "https://programmers-network.firebaseio.com",
    projectId: "programmers-network",
    storageBucket: "programmers-network.appspot.com",
    messagingSenderId: "554107411721",
    appId: "1:554107411721:web:f809ea597f6bc754f347d8"
};

// initialize firebase
const app = firebase.initializeApp(firebaseConfig);
// firebase.initializeApp(firebaseConfig);

export const fs = app.firestore();
export const st = app.storage();