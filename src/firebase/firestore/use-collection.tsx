
'use client';

import { useState, useEffect } from "react";
import {
  collection,
  onSnapshot,
  query,
  where,
  Query,
  DocumentData,
  FirestoreError,
  WhereFilterOp,
} from "firebase/firestore";
import { useFirestore } from "../provider";

interface UseCollectionOptions {
    where?: [string, WhereFilterOp, any][];
}

export function useCollection<T>(path: string, options?: UseCollectionOptions) {
  const firestore = useFirestore();
  const [data, setData] = useState<T[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<FirestoreError | null>(null);

  useEffect(() => {
    if (!firestore) {
        setLoading(false);
        return;
    }

    let collectionRef: Query<DocumentData> = collection(firestore, path);

    if (options?.where) {
        options.where.forEach(w => {
            collectionRef = query(collectionRef, where(w[0], w[1], w[2]));
        });
    }

    const unsubscribe = onSnapshot(
      collectionRef,
      (snapshot) => {
        const result: T[] = [];
        snapshot.forEach((doc) => {
          result.push({ id: doc.id, ...doc.data() } as T);
        });
        setData(result);
        setLoading(false);
      },
      (err) => {
        setError(err);
        setLoading(false);
        console.error(err);
      }
    );

    return () => unsubscribe();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firestore, path, JSON.stringify(options?.where)]);

  return { data, loading, error };
}
