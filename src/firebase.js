import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyCFiYKBLuXx-xdUvsDJXHuauG9_wMltsAc",
    authDomain: "facebook-messenger-clone-59f87.firebaseapp.com",
    projectId: "facebook-messenger-clone-59f87",
    storageBucket: "facebook-messenger-clone-59f87.appspot.com",
    messagingSenderId: "505455079856",
    appId: "1:505455079856:web:a614aa642a515bc3c12675",
     measurementId: "G-0GBK8EQNW6"
})

const db = firebaseApp.firestore();

export default db;