import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB1jRq2DoU2aYP7Gdt0VfbgNkKoC5eaMRs",
  authDomain: "adminka-84d1b.firebaseapp.com",
  databaseURL:
    "https://adminka-84d1b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "adminka-84d1b",
  storageBucket: "adminka-84d1b.appspot.com",
  messagingSenderId: "253024916394",
  appId: "1:253024916394:web:48110072ecf9a1ae3c91d3",
  measurementId: "G-GLT1JDZREZ",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
