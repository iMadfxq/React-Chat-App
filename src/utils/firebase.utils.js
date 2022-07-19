// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbjZ-H7V_NGW8fKxGjfEQ3YxAfHaQdFVM",
  authDomain: "imadfxq-chatapp.firebaseapp.com",
  projectId: "imadfxq-chatapp",
  storageBucket: "imadfxq-chatapp.appspot.com",
  messagingSenderId: "702723945257",
  appId: "1:702723945257:web:99023a56065d099f7f3d38"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore()

export const colRef = collection(db, 'chats')

getDocs(colRef)
.then((snapshot) => {
  let chats = []
  snapshot.docs.forEach((doc) => {
    chats.push({...doc.data()})
  })
  console.log(chats)
})