// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth"
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCEFibl6Jl-ip8Hndah94jZL_ZE6MLHtug",
    authDomain: "formcraft-19742.firebaseapp.com",
    projectId: "formcraft-19742",
    storageBucket: "formcraft-19742.appspot.com",
    messagingSenderId: "211604083763",
    appId: "1:211604083763:web:f8de3c1497b3266178bf46",
    measurementId: "G-XXM9R5LCGD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);

export const auth = getAuth(app)

const provider = new GoogleAuthProvider();

export const SignInWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then((result) =>{
        console.log(result._tokenResponse);
        return true;
    })
    .catch((error) => {
        console.log(error);
    })
}
