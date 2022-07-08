import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth'

// add config json here

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const google = new GoogleAuthProvider()
export const facebook = new FacebookAuthProvider()