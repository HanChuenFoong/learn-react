import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBtXVmuxaKm6qs3oIJjA1tZKTII92XDKLo",
  authDomain: "thedojosite-8c885.firebaseapp.com",
  projectId: "thedojosite-8c885",
  storageBucket: "thedojosite-8c885.appspot.com",
  messagingSenderId: "607766097530",
  appId: "1:607766097530:web:a4106f18af3389783955c3"
};

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }