import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCReSuDsHcnwkeCGjtTUjJ7GFXO4xo33uM",
  authDomain: "tinder-clone-e3851.firebaseapp.com",
  projectId: "tinder-clone-e3851",
  storageBucket: "tinder-clone-e3851.appspot.com",
  messagingSenderId: "423382641799",
  appId: "1:423382641799:web:433495f97f5256bce4dc22",
};
const firebaseApp = initializeApp(firebaseConfig);
export const firestore = getFirestore(firebaseApp);
export const postsRef = collection(firestore, "people");
