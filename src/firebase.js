import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyButEMCzqXAmBYxifEHE7Hk7zrjBa5vKW0",
    authDomain: "tsechacks-8985b.firebaseapp.com",
    databaseURL: "https://tsechacks-8985b-default-rtdb.firebaseio.com",
    projectId: "tsechacks-8985b",
    storageBucket: "tsechacks-8985b.appspot.com",
    messagingSenderId: "40573429405",
    appId: "1:40573429405:web:e5a481356234dbf0d99674"
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth()
export default app;
// export default firebase;