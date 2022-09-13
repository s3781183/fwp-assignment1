import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDWh3jbzNC-hg159engcUCQAprpssfyMS4",
  authDomain: "fwp-assignment1.firebaseapp.com",
  projectId: "fwp-assignment1",
  storageBucket: "fwp-assignment1.appspot.com",
  messagingSenderId: "449123135191",
  appId: "1:449123135191:web:4b4f738111d605e93b8a92",
  measurementId: "G-52GJ6M4QRG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
