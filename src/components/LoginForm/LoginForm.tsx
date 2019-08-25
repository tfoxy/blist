import React, { useState, useCallback, ChangeEvent, FormEvent } from 'react';
import axios, { AxiosResponse } from 'axios';
import { LoginFormData } from './types';
import useAuthenticatedUser, { AuthenticatedUser } from '../../services/useAuthenticatedUser';
// import styles from './LoginForm.module.css';

export default function LoginForm() {
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<LoginFormData>({});
  const [, setAuthenticatedUser] = useAuthenticatedUser();

  const onLoginFormFieldChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    },
    [formData],
  );

  const onSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setLoading(true);
      try {
        const response = await axios.post<any, AxiosResponse<AuthenticatedUser>>(
          `${process.env.REACT_APP_AUTH_URL}/login`,
          formData,
        );
        setAuthenticatedUser(response.data);
      } catch {
        setLoading(false);
      }
    },
    [formData, setAuthenticatedUser],
  );

  return (
    <form onSubmit={onSubmit} method="POST">
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={onLoginFormFieldChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={onLoginFormFieldChange}
      />
      <button type="submit" disabled={loading}>
        Login
      </button>
    </form>
  );
}
