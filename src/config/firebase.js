import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup,FacebookAuthProvider } from "firebase/auth";

/*const firebaseConfig = {
    apiKey: "AIzaSyALy3NjHS7WIeI1Xr2MkL0zKVYz4XtSvGE",
    authDomain: "auth-876d2.firebaseapp.com",
    projectId: "auth-876d2",
    storageBucket: "auth-876d2.appspot.com",
    messagingSenderId: "764748868726",
    appId: "1:764748868726:web:e8c8652a5930c96ed58357"
  };*/
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
    //   var obj = {name:resp.user.displayName, email:resp.user.email, profile:resp.user.photoURL};
    //   let email = obj.email.replace(/[^a-zA-Z0-9 ]/g, '');
    //   console.log(email, obj)
})};

export const signInWithFacebook = async () =>{
    const provider=new FacebookAuthProvider()
    signInWithPopup(auth,provider)
    .then(res=>{
        console.log(res)
    })
}


