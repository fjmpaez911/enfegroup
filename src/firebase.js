import firebase from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCdLjaSevb55Qvg2DzEZJ11YpmoujLeawY",
  authDomain: "enfegroup-15c7d.firebaseapp.com",
  projectId: "enfegroup-15c7d",
  storageBucket: "enfegroup-15c7d.appspot.com",
  messagingSenderId: "737596777454",
  appId: "1:737596777454:web:baa0d8f3fbd68b2557e4ff",
  measurementId: "G-WJ0Y5TBMTX"
};

firebase.initializeApp(firebaseConfig);

export const fb = firebase;
