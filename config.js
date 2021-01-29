import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCWG8YI7ovKTUxn8lRAziJ-PrEL6x_qclc",
  authDomain: "booksanta-ed176.firebaseapp.com",
  projectId: "booksanta-ed176",
  storageBucket: "booksanta-ed176.appspot.com",
  messagingSenderId: "1019096339400",
  appId: "1:1019096339400:web:7f4e3e900368788b8ce6fd"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
