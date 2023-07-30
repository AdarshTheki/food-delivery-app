import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBbQ4vt_MpC2gHVMPXacCOxnWOSrCFoiPE",
  authDomain: "viteapp-26052023.firebaseapp.com",
  projectId: "viteapp-26052023",
  storageBucket: "viteapp-26052023.appspot.com",
  messagingSenderId: "31139974838",
  appId: "1:31139974838:web:f22670b59acaf0fdbe6017",
  measurementId: "G-VRWWM5PR94",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const firestore = getFirestore(app);