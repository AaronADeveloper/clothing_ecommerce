import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDVT6wnIwOqPfxeoEYBXFseHBmyODgeaSg",
    authDomain: "clothing-ecommerce-e24b0.firebaseapp.com",
    databaseURL: "https://clothing-ecommerce-e24b0.firebaseio.com",
    projectId: "clothing-ecommerce-e24b0",
    storageBucket: "clothing-ecommerce-e24b0.appspot.com",
    messagingSenderId: "325567889005",
    appId: "1:325567889005:web:dce34d54302fa88cb58964",
    measurementId: "G-28CWKREY8W"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;