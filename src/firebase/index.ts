import { getFirebaseConfig } from "./config";
import { initializeApp, getApp, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";
import { getFirestore, type Firestore } from "firebase/firestore";

// Re-export providers and hooks
export { FirebaseProvider, FirebaseClientProvider } from "./client-provider";
export {
  useFirebase,
  useFirebaseApp,
  useFirestore,
  useAuth,
} from "./provider";
export { useCollection } from "./firestore/use-collection";
export { useDoc } from "./firestore/use-doc";
export { useUser } from "./auth/use-user";

let app: FirebaseApp;
let auth: Auth;
let firestore: Firestore;

export async function initializeFirebase() {
  if (app) {
    return { app, auth, firestore };
  }

  try {
    app = getApp();
  } catch (e) {
    const firebaseConfig = getFirebaseConfig();
    app = initializeApp(firebaseConfig);
  }

  auth = getAuth(app);
  firestore = getFirestore(app);

  return { app, auth, firestore };
}
