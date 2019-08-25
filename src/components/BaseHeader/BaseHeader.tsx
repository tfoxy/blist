import React, { useCallback } from 'react';
import useAuthenticatedUser from '../../services/useAuthenticatedUser';
// import { Props } from './types';
// import styles from './BaseHeader.module.css';

export default function BaseHeader() {
  const [authenticatedUser, setAuthenticatedUser] = useAuthenticatedUser();

  const logout = useCallback(() => {
    setAuthenticatedUser(null);
  }, [setAuthenticatedUser]);

  if (!authenticatedUser) {
    return null;
  }

  return (
    <div>
      <span>{authenticatedUser.name}</span>
      <button type="button" onClick={logout}>
        Logout
      </button>
    </div>
  );
}
