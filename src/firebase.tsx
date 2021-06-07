import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCe_oXHdxwZjNWj_LPKhBzjYEiQgxNp8kA",
    authDomain: "e-commerce-c7981.firebaseapp.com",
    projectId: "e-commerce-c7981",
    storageBucket: "e-commerce-c7981.appspot.com",
    messagingSenderId: "852607799488",
    appId: "1:852607799488:web:8b1d0abdd480c5e675dd25"
  };

firebase.initializeApp(firebaseConfig);

const firebaseAppAuth = firebase.auth();
const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
    facebookProvider: new firebase.auth.FacebookAuthProvider()
};

export {firebaseAppAuth, providers};