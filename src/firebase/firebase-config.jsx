import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCAqYKByq7-F2zFBV9BaFStLPpgn7KX3ww",
  authDomain: "journalapp-react-513b4.firebaseapp.com",
  projectId: "journalapp-react-513b4",
  storageBucket: "journalapp-react-513b4.appspot.com",
  messagingSenderId: "476068808078",
  appId: "1:476068808078:web:2975b4a47b32acc5ec10df"
};

firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
  db,
  googleAuthProvider,
  firebase
}