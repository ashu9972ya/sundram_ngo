import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAR5qQZaUH0psRdxeLjJUy4wCmKnK98Hog",
  authDomain: "sundramngo-1251c.firebaseapp.com",
  projectId: "sundramngo-1251c",
  storageBucket: "sundramngo-1251c.appspot.com",
  messagingSenderId: "875888040589",
  appId: "1:875888040589:web:a7f7448ad32154174260c4"
};

const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
export {fireDB } ;