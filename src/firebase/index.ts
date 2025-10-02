import { getFirebaseConfig } from "./config";
import { initializeApp, getApp, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";
import { getFirestore, type Firestore } from "firebase/firestore";

// Re-export providers and hooks
export { FirebaseProvider, useFirebase, useFirebaseApp, useFirestore, useAuth } from "./provider";
export { FirebaseClientProvider } from "./client-provider";
export { useCollection } from "./firestore/use-collection";
export { useDoc } from "./firestore/use-doc";
export { useUser } from "./auth/use-user";

let app: FirebaseApp | undefined;
let auth: Auth | undefined;
let firestore: Firestore | undefined;

export type FirebaseServices = {
  app: FirebaseApp;
  auth: Auth;
  firestore: Firestore;
} | null;

export async function initializeFirebase(): Promise<FirebaseServices> {
  if (app) {
    return { app, auth: auth!, firestore: firestore! };
  }

  const firebaseConfig = getFirebaseConfig();
  if (!firebaseConfig) {
    return null;
  }

  try {
    app = getApp();
  } catch (e) {
    app = initializeApp(firebaseConfig);
  }

  auth = getAuth(app);
  firestore = getFirestore(app);

  return { app, auth, firestore };
}
