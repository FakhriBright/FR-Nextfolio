import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDvihRA4rr6pGdRqV0HQwqG1GyqkPpGUkc",
  authDomain: "fr-nextfolio.firebaseapp.com",
  projectId: "fr-nextfolio",
  storageBucket: "fr-nextfolio.firebasestorage.app",
  messagingSenderId: "54260361884",
  appId: "1:54260361884:web:23cfbdb0c13a1635d35b59",
  measurementId: "G-9XPGMWV2HV"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
