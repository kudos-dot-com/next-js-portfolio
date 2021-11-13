import * as firebase from "firebase/app";
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "@firebase/storage";
const firebaseApp = initializeApp({
  apiKey: "AIzaSyB0D2D9DbC_1K9VRylGOv7shhns6ou8F2o",
    authDomain: "tivra-f772d.firebaseapp.com",
    projectId: "tivra-f772d",
    storageBucket: "tivra-f772d.appspot.com",
    messagingSenderId: "456733630793",
    appId: "1:456733630793:web:79582ca599c475989f7a98",
    measurementId: "G-SKQ0ZWCFV2"
});

export const db = getFirestore()
export const storage = getStorage(firebaseApp)

