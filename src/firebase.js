import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAh5fy71LXQwNVeRTyXPS8zljycCMUGcZw",
  authDomain: "challenge-31759.firebaseapp.com",
  databaseURL: "https://challenge-31759.firebaseio.com",
  projectId: "challenge-31759",
  storageBucket: "challenge-31759.appspot.com",
  messagingSenderId: "865806410691",
  appId: "1:865806410691:web:a9770fa891dc13390d1376",
  measurementId: "G-K5C9T7XTXX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
