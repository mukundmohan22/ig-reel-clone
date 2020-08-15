import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCxeUF1vuYyPA9FN_sTI8m63XKfrhLfNQY",
  authDomain: "ig-reels-50432.firebaseapp.com",
  databaseURL: "https://ig-reels-50432.firebaseio.com",
  projectId: "ig-reels-50432",
  storageBucket: "ig-reels-50432.appspot.com",
  messagingSenderId: "540353984263",
  appId: "1:540353984263:web:17f6061a45ef31c6b277a2",
  measurementId: "G-0NKPX81LX5"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;


