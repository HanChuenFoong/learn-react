import firebase from "firebase";
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDsc_KH1B0e0mznCaIZnXFTb5IqdHuVqY8",
  authDomain: "cooking-ninja-site-d326e.firebaseapp.com",
  projectId: "cooking-ninja-site-d326e",
  storageBucket: "cooking-ninja-site-d326e.appspot.com",
  messagingSenderId: "868731976749",
  appId: "1:868731976749:web:add4106729a17fd1c24ca4"
};

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()

export { projectFirestore }
