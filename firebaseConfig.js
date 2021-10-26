import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const config = {
  apiKey: process.env.FBASE_APIKEY,
  authDomain: process.env.FBASE_AUTH_DOMAIN,
  projectId: process.env.FBASE_PROJECT_ID,
  storageBucket: process.env.FBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FBASE_MESG_SENDER_ID,
  appId: process.env.FBASE_APP_ID,
};

console.log(config);

const createFirebaseApp = (config = {}) => {
  try {
    return getApp();
  } catch (e) {
    return initializeApp(config);
  }
};

const app = createFirebaseApp(config);
const auth = getAuth(app);
onAuthStateChanged(auth, (user) => {
  console.log("user:", user);
});

const db = getFirestore(app);
