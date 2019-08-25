import React from 'react';
import LoginForm from '../LoginForm';
import RegisterForm from '../RegisterForm';
// import { Props } from './types';
// import styles from './HomeView.module.css';

export default function HomeView() {
  return (
    <div>
      HomeView
      <RegisterForm />
      <LoginForm />
    </div>
  );
}
