import React, { useState, useCallback, ChangeEvent, FormEvent } from 'react';
import { Props } from './types';
// import styles from './NewCardList.module.css';

export default function NewCardList({ onSubmit }: Props) {
  const [name, setName] = useState('');

  const onNameChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }, []);

  const onFormSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      onSubmit({ name });
      setName('');
    },
    [name, onSubmit],
  );

  return (
    <div>
      <form onSubmit={onFormSubmit} method="POST">
        <input
          type="text"
          name="cardListName"
          placeholder="New card list name..."
          value={name}
          onChange={onNameChange}
        />
        <button type="submit">Add card list</button>
      </form>
    </div>
  );
}
