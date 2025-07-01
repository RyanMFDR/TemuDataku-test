import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyACzHyJg-V6L1gvb0UfRyA27OcZwhI0Kdg",
  authDomain: "temudataku-intern.firebaseapp.com",
  projectId: "temudataku-intern",
  storageBucket: "temudataku-intern.firebasestorage.app",
  messagingSenderId: "552028944265",
  appId: "1:552028944265:web:941603c165b15ee44e9358",
  measurementId: "G-2PN443S7D3",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
