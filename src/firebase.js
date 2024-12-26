// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import {
//   getFirestore,
//   collection,
//   addDoc,
//   updateDoc,
//   doc,
//   getDocs,
//   onSnapshot,
// } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyBGkaIcpf5TtvexjgSj15zm50oYdnnvL60",
//   authDomain: "whatsapp-chat-clone-eb24a.firebaseapp.com",
//   projectId: "whatsapp-chat-clone-eb24a",
//   storageBucket: "whatsapp-chat-clone-eb24a.firebasestorage.app",
//   messagingSenderId: "397886022647",
//   appId: "1:397886022647:web:e9e01199eff42c3bb384f2",
//   measurementId: "G-XT6SE8K7C4",
// };

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const firestore = getFirestore(app);
// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBGkaIcpf5TtvexjgSj15zm50oYdnnvL60",
  authDomain: "whatsapp-chat-clone-eb24a.firebaseapp.com",
  projectId: "whatsapp-chat-clone-eb24a",
  storageBucket: "whatsapp-chat-clone-eb24a.firebasestorage.app",
  messagingSenderId: "397886022647",
  appId: "1:397886022647:web:e9e01199eff42c3bb384f2",
  measurementId: "G-XT6SE8K7C4",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Initialize Firestore here

export { db }; // Export db to use in your app
