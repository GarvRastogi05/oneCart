import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "loginonecart-1bf60.firebaseapp.com",
  projectId: "loginonecart-1bf60",
  storageBucket: "loginonecart-1bf60.firebasestorage.app",
  messagingSenderId: "889710785436",
  appId: "1:889710785436:web:6bfe93457c83996f0a8e59"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

export { auth, provider }

