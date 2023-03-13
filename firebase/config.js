import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC1KQWIoFh__5LgnoDFM15wQb6kK_bhaEo',
  authDomain: 'azwell-project-21b0f.firebaseapp.com',
  projectId: 'azwell-project-21b0f',
  storageBucket: 'azwell-project-21b0f.appspot.com',
  messagingSenderId: '685145400804',
  appId: '1:685145400804:web:f38284acdb095df2b213f1',
  measurementId: 'G-2R6KDCSG3J',
}

initializeApp(firebaseConfig)
const firebaseAuth = getAuth()
// console.debug('firebaseAuth', firebaseAuth)

export { firebaseAuth }
