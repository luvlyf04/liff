import { addDoc, collection, setDoc } from "firebase/firestore";
import firebase from "../firebase/index";
const { firestore } = firebase;
export function test1(name, userId) {
  return addDoc(collection(firestore, "User"), {
    full_name: name,
    user_id: userId,
  });
}
