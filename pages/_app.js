import "../styles/globals.css";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import app from "../firebaseConfig";
import Login from "./login";

function MyApp({ Component, pageProps }) {
  const auth = getAuth(app);
  const [user] = useAuthState(auth);
  if (!user) return <Login />;
  return <Component {...pageProps} />;
}

export default MyApp;
