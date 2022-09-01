import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup,FacebookAuthProvider } from "firebase/auth";

  const firebaseConfig = {
    apiKey: "AIzaSyAt7ep9iQcGnDwWimtYvi2hUXzHsR6rIFY", 
    authDomain: "auth-bolt.firebaseapp.com", 
    projectId: "auth-bolt", 
    storageBucket: "auth-bolt.appspot.com",
    messagingSenderId: "207169777719",
    appId: "1:207169777719:web:df95701727a93bc9b18fb2",
    measurementId: "G-18LFCV33P2"
  };
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export const signInWithGoogle = async () =>{
    signInWithPopup(auth, googleProvider).then(resp=>{
        console.log(resp)
})};
//How to use Regex?
export const signInWithFacebook = async () =>{
    const provider=new FacebookAuthProvider()
    signInWithPopup(auth,provider)
    .then(res=>{
        console.log(res)
    })
}


