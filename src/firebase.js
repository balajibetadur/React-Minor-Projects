import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA91ffbFP6mE1fwS5D_EZPSxZ-l6B-Cc0g",
  authDomain: "auth-e89dd.firebaseapp.com",
  projectId: "auth-e89dd",
  storageBucket: "auth-e89dd.appspot.com",
  messagingSenderId: "64743672817",
  appId: "1:64743672817:web:7e2302cd17515665acd250",
  measurementId: "G-34TSH4ZFLJ"

};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const google = new GoogleAuthProvider()
export const facebook = new FacebookAuthProvider()