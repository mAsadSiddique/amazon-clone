import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBZsEnrz8Lb7Y6lvP33CvM9t4zZYCZ4JHo",
    authDomain: "amzone-challenge.firebaseapp.com",
    databaseURL: "https://amzone-challenge.firebaseio.com",
    projectId: "amzone-challenge",
    storageBucket: "amzone-challenge.appspot.com",
    messagingSenderId: "914467620489",
    appId: "1:914467620489:web:5c989ef86fb148261ce858",
    measurementId: "G-FYLYEQT7KT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };