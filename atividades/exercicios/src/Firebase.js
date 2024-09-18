import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAHQag54yq6HEHJRGpDF7GG7riyb02c5Vs",
    authDomain: "projetoead-f15b3.firebaseapp.com",
    projectId: "projetoead-f15b3",
    storageBucket: "projetoead-f15b3.appspot.com",
    messagingSenderId: "82607044461",
    appId: "1:82607044461:web:abdd080cb2959afdd50c64"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;