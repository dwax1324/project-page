import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCNhVAXhBKetGJhQWymCQSeY_rLCmudJ5w",
    authDomain: "pj-pages.firebaseapp.com",
    projectId: "pj-pages",
    storageBucket: "pj-pages.appspot.com",
    messagingSenderId: "579490492722",
    appId: "1:579490492722:web:d089adb40af9621c79272b",
    measurementId: "G-REY56NJMLV"
};

firebase.initializeApp(firebaseConfig);

export default firebase
