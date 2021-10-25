import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.FBASE_APIKEY,
  authDomain: process.env.FBASE_AUTH_DOMAIN,
  projectId: process.env.FBASE_PROJECT_ID,
  storageBucket: process.env.FBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FBASE_MESG_SENDER_ID,
  appId: process.env.FBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
