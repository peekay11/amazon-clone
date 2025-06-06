
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyBiicxc3GZ4vDxoglDMZAQrp4MFcoWyp7E",
  authDomain: "clone-3f9cc.firebaseapp.com",
  projectId: "clone-3f9cc",
  storageBucket: "clone-3f9cc.firebasestorage.app",
  messagingSenderId: "977046233647",
  appId: "1:977046233647:web:f1819742964ac24fe85cda",
  measurementId: "G-89WY5M5T6G"
};

const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);