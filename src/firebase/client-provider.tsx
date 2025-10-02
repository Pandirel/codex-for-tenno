"use client";

import { useEffect, useState } from "react";
import { initializeFirebase, type FirebaseServices } from ".";
import { FirebaseProvider } from "./provider";

export function FirebaseClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [firebase, setFirebase] = useState<FirebaseServices | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const init = async () => {
      const services = await initializeFirebase();
      setFirebase(services);
      setIsInitialized(true);
    };

    init();
  }, []);

  if (!isInitialized) {
    return null; // or a loading indicator while Firebase initializes
  }

  if (!firebase) {
    return <>{children}</>;
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
