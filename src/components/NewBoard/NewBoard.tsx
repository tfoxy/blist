import React, { useCallback, FormEvent, ChangeEvent, useState } from 'react';
import { Props } from './types';
// import styles from './NewBoard.module.css';

export default function NewBoard({ onSubmit }: Props) {
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
      NewBoard
      <form onSubmit={onFormSubmit} method="POST">
        <input
          type="text"
          name="boardName"
          placeholder="New board name..."
          value={name}
          onChange={onNameChange}
        />
        <button type="submit">Add board</button>
      </form>
    </div>
  );
}
