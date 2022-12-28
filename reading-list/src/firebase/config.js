import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD_S_Jet933t26XktFndz3pQviBJWIdA84",
  authDomain: "readinglistapp-9f166.firebaseapp.com",
  projectId: "readinglistapp-9f166",
  storageBucket: "readinglistapp-9f166.appspot.com",
  messagingSenderId: "220962103261",
  appId: "1:220962103261:web:dfe36b1cba2648aac5e034"
};

// init firebase
const app = initializeApp(firebaseConfig)

// init firestore
const db = getFirestore(app)

// init firebase auth
const auth = getAuth()

export { db, auth }