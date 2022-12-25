import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCcgeZ1T4TBkd2uxByr-WHQvP0QU-dyqU4",
  authDomain: "mymoney-e899e.firebaseapp.com",
  projectId: "mymoney-e899e",
  storageBucket: "mymoney-e899e.appspot.com",
  messagingSenderId: "283285698466",
  appId: "1:283285698466:web:add679df055cf2268564fb"
};

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }