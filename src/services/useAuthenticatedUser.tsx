import React, { useMemo, useEffect, useRef } from 'react';
import createStateContextHook from './createStateContextHook';

export interface AuthenticatedUser {
  id: string;
  name: string;
  token: string;
}

const STORAGE_KEY = 'blist__authenticatedUser';

function getStorageUser() {
  const storedValue = localStorage.getItem(STORAGE_KEY);
  if (!storedValue) return storedValue;
  return JSON.parse(storedValue);
}

function setStorageUser(value: AuthenticatedUser | null) {
  if (value) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  } else {
    localStorage.removeItem(STORAGE_KEY);
  }
}

const {
  StateContextProvider,
  useStateContext: useAuthenticatedUser,
  useStateContextProviderValue,
} = createStateContextHook<AuthenticatedUser | null>([null, () => {}]);

export function AuthenticatedUserProvider(props: { children: React.ReactNode }) {
  const initialValue = useMemo(getStorageUser, []);
  const stateContextValue = useStateContextProviderValue(initialValue);
  const mounted = useRef(false);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      setStorageUser(stateContextValue[0]);
    }
  }, [stateContextValue]);

  return <StateContextProvider value={stateContextValue}>{props.children}</StateContextProvider>;
}

export default useAuthenticatedUser;
