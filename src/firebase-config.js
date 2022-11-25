import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBa8npV2T5UApBrAdUn-SwgscolOJ2zOrM",
  authDomain: "blog-web-38750.firebaseapp.com",
  projectId: "blog-web-38750",
  storageBucket: "blog-web-38750.appspot.com",
  messagingSenderId: "470530014357",
  appId: "1:470530014357:web:e0c9462cdeadf43f1cef9c"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
