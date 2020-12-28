import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDnO7LO7zodI3tQz5hsenZ4YNWkQK0PtmM",
    authDomain: "login-ff799.firebaseapp.com",
    projectId: "login-ff799",
    storageBucket: "login-ff799.appspot.com",
    messagingSenderId: "68256329196",
    appId: "1:68256329196:web:90c2797d17bc6a6a4d64c9"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;