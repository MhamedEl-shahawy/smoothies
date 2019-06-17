import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
const  config = {
  apiKey: "AIzaSyAR6-2KCID3Ztm8Eb5uxIzRztanLiZJBtk",
  authDomain: "smoothies-e9474.firebaseapp.com",
  databaseURL: "https://smoothies-e9474.firebaseio.com",
  projectId: "smoothies-e9474",
  storageBucket: "smoothies-e9474.appspot.com",
  messagingSenderId: "112055105872",
  appId: "1:112055105872:web:074ea450a2687b9f"
};


const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

// export firestore database
export default firebaseApp.firestore()