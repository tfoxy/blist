import React, { useEffect } from 'react';
import LoginForm from '../LoginForm';
import RegisterForm from '../RegisterForm';
import useAuthenticatedUser from '../../services/useAuthenticatedUser';
import { Props } from './types';
// import styles from './HomeView.module.css';

export default function HomeView({ history }: Props) {
  const [authenticatedUser] = useAuthenticatedUser();

  useEffect(() => {
    if (authenticatedUser) {
      history.push('/boards');
    }
  }, [authenticatedUser, history]);

  return (
    <div>
      HomeView
      <RegisterForm />
      <LoginForm />
    </div>
  );
}
