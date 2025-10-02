"use client";

import { useEffect, useState } from "react";
import { FirebaseProvider, initializeFirebase } from ".";
import type { FirebaseApp } from "firebase/app";
import type { Auth } from "firebase/auth";
import type { Firestore }d from "firebase/firestore";

type FirebaseServices = {
  app: FirebaseApp;
  auth: Auth;
  firestore: Firestore;
};

export function FirebaseClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [firebase, setFirebase] = useState<FirebaseServices | null>(null);

  useEffect(() => {
    const init = async () => {
      const services = await initializeFirebase();
      setFirebase(services);
    };

    init();
  }, []);

  if (!firebase) {
    return null; // or a loading indicator
  }

  return (
    <FirebaseProvider
      app={firebase.app}
      auth={firebase.auth}
      firestore={firebase.firestore}
    >
      {children}
    </FirebaseProvider>
  );
}
