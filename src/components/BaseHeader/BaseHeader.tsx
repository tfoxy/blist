import React, { useCallback } from 'react';
import { withRouter } from 'react-router';
import useAuthenticatedUser from '../../services/useAuthenticatedUser';
import { Props } from './types';
// import styles from './BaseHeader.module.css';

function BaseHeader({ history }: Props) {
  const [authenticatedUser, setAuthenticatedUser] = useAuthenticatedUser();

  const logout = useCallback(() => {
    setAuthenticatedUser(null);
    history.push('/');
  }, [setAuthenticatedUser, history]);

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

export default withRouter(BaseHeader);
