import firebase from 'firebase'

const firebaseConfig = firebase.initializeApp ({
    apiKey: "AIzaSyBCnBrQjo5F4vqHp8dscBJvtgbbo0E_qg8",
    authDomain: "clone-c8c4e.firebaseapp.com",
    projectId: "clone-c8c4e",
    storageBucket: "clone-c8c4e.appspot.com",
    messagingSenderId: "944851671854",
    appId: "1:944851671854:web:02e5a7c3dc24bceaf3f8bf",
    measurementId: "G-6RC6QMTY2P"
  });


const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()


export { db, auth, provider }