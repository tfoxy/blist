import React from 'react';
import { Props } from './types';
import useAuthenticatedUser from '../../services/useAuthenticatedUser';
import BaseHeader from '../BaseHeader';
import { useApolloAuthenticationToken } from '../../services/CustomApolloProvider';
// import styles from './BaseView.module.css';

export default function BaseView({ children, history }: Props) {
  const [authenticatedUser] = useAuthenticatedUser();

  useApolloAuthenticationToken(authenticatedUser ? authenticatedUser.token : '');

  if (!authenticatedUser) {
    history.push('/');
    return null;
  }

  return (
    <div>
      <BaseHeader />
      <div>{children}</div>
    </div>
  );
}
