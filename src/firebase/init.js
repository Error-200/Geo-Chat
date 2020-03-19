import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var config = {
  apiKey: "AIzaSyBF2jdQsl2FidL5_w6zbrXycSzGB9Q3Fso",
  authDomain: "geo-chat-45c78.firebaseapp.com",
  databaseURL: "https://geo-chat-45c78.firebaseio.com",
  projectId: "geo-chat-45c78",
  storageBucket: "geo-chat-45c78.appspot.com",
  messagingSenderId: "857541443103",
  appId: "1:857541443103:web:5e27fc96d700d614c95f2a",
  measurementId: "G-JFPF6J6LSN"
};
// Initialize Firebase
 const firebaseApp = firebase.initializeApp(config);
firebase.analytics();

export default firebaseApp.firestore()
