
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase konfiguracija (unesi svoje podatke)
const firebaseConfig = {
    apiKey: "AIzaSyBOQoSUeqnJmplrdV_vQDt_LiOvd4g51NM",
    authDomain: "smartastartapp.firebaseapp.com",
    projectId: "smartastartapp",
    storageBucket: "smartastartapp.firebasestorage.app",
    messagingSenderId: "341753990453",
    appId: "1:341753990453:web:f77d50272845645bae507c",
    measurementId: "G-D8BC2GKNV4"
};

// Inicijalizacija Firebase aplikacije
const app = initializeApp(firebaseConfig);

// Dobij Firestore instancu
const db = getFirestore(app);

// Eksportuj Firestore instancu
export { db };
