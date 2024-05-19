import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyA-jvDChsNYaBEgtU3EoVnDV6YivxCnEm0",
    authDomain: "disneyplus-clone-d4f6d.firebaseapp.com",
    projectId: "disneyplus-clone-d4f6d",
    storageBucket: "disneyplus-clone-d4f6d.appspot.com",
    messagingSenderId: "235667558794",
    appId: "1:235667558794:web:23e44b8290faa7a576b873",
    measurementId: "G-QEM4X113WK"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp); // Pass the firebaseApp instance to getFirestore
const auth = getAuth(); // Get the auth instance
const provider = new GoogleAuthProvider(); // Create a new instance of GoogleAuthProvider
const storage = getStorage(); // Get the storage instance

export { auth, provider, storage };
export default db;
