import { useState } from 'react';
import { useFirebase } from './index';

import { User } from 'firebase';

export function useFirebaseUser() {
  const firebase = useFirebase();
  const [user, setUser] = useState<User>();

  firebase.auth().onAuthStateChanged((n: any) => {
    setUser(n);
  });

  return user;
}
