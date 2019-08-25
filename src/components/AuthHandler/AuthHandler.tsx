import React from 'react';
import useAuthenticatedUser from '../../services/useAuthenticatedUser';
import { Props } from './types';
import { useApolloAuthenticationToken } from '../../services/CustomApolloProvider';
import HomeView from '../HomeView';
// import styles from './AuthHandler.module.css';

export default function AuthHandler({ children }: Props): React.ReactElement {
  const [authenticatedUser] = useAuthenticatedUser();

  useApolloAuthenticationToken(authenticatedUser ? authenticatedUser.token : '');

  return authenticatedUser ? children : <HomeView />;
}
