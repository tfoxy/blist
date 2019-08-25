import React, { useState, useCallback, ChangeEvent, FormEvent } from 'react';
import axios, { AxiosResponse } from 'axios';
import { RegisterFormData } from './types';
import { useInsertUserMutation } from '../../generated/graphql';
import useAuthenticatedUser, { AuthenticatedUser } from '../../services/useAuthenticatedUser';
// import styles from './RegisterForm.module.css';

export default function RegisterForm() {
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<RegisterFormData>({
    username: '',
    password: '',
    confirmPassword: '',
  });
  const [insertUser] = useInsertUserMutation();
  const [, setAuthenticatedUser] = useAuthenticatedUser();

  const onRegisterFormFieldChange = useCallback(
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
          `${process.env.REACT_APP_AUTH_URL}/signup`,
          formData,
        );
        const { data } = response;
        await insertUser({ variables: { id: data.id, name: data.name } });
        setAuthenticatedUser(data);
      } catch {
        setLoading(false);
      }
    },
    [formData, insertUser, setAuthenticatedUser],
  );

  return (
    <form onSubmit={onSubmit} method="POST">
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={onRegisterFormFieldChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={onRegisterFormFieldChange}
      />
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={onRegisterFormFieldChange}
      />
      <button type="submit" disabled={loading}>
        Register
      </button>
    </form>
  );
}
