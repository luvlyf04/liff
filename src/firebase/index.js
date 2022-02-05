import firebase, { initializeApp } from "firebase/app";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyC8v0LHRpe--gme_H3Nk8f6VSDYUPQ9tpA",
  authDomain: "notification-demo-dc9b6.firebaseapp.com",
  projectId: "notification-demo-dc9b6",
  storageBucket: "notification-demo-dc9b6.appspot.com",
  messagingSenderId: "951634503640",
  appId: "1:951634503640:web:412ac98c8dcb266f5774ad",
  measurementId: "G-CV154YLT6E",
};

const app = initializeApp(config)
const firestore = getFirestore(app);

export default {
  firestore,
};
