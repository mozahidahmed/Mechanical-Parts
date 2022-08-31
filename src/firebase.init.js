// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
    apiKey: "AIzaSyBFJ4n09Q-xrUNWbSvrGtW-zp9awi5lfaI",
    authDomain: "assignment-baro.firebaseapp.com",
    projectId: "assignment-baro",
    storageBucket: "assignment-baro.appspot.com",
    messagingSenderId: "906026585475",
    appId: "1:906026585475:web:1841cedba0157b46a2bab6"
  };





const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;