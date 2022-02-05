import { addDoc, collection, setDoc } from "firebase/firestore";
import firebase from "../firebase/index";
const { firestore } = firebase;
export function test1() {
  return addDoc(collection(firestore, "User"), {
    name: "Aphirat",
  });
}
