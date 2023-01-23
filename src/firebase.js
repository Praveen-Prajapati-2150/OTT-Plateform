import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCkwpWywz7dqnQTQaGXJgcCVLULC87xTQ0",
  authDomain: "netflix-clone-47022.firebaseapp.com",
  projectId: "netflix-clone-47022",
  storageBucket: "netflix-clone-47022.appspot.com",
  messagingSenderId: "585473565559",
  appId: "1:585473565559:web:5c3c6723fda9bf70063772",
  measurementId: "G-6JQ9ZEEVW3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth }
export default db;