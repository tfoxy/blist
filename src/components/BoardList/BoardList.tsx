import React, { useMemo, useCallback } from 'react';
import { useInsertBoardMutation } from '../../generated/graphql';
import NewBoard from '../NewBoard';
import useAuthenticatedUser from '../../services/useAuthenticatedUser';
import { Link } from 'react-router-dom';
import { Props } from './types';
// import styles from './BoardList.module.css';

export default function BoardList({ boardList }: Props) {
  const [insertBoard] = useInsertBoardMutation();
  const [authUser] = useAuthenticatedUser();

  const orderedBoards = useMemo(
    () => boardList.slice().sort((l, r) => l.created_at - r.created_at),
    [boardList],
  );

  const newCardSubmitted = useCallback(
    (board: { name: string }) => {
      if (!authUser) throw new Error('User is not authenticated');
      insertBoard({ variables: { name: board.name, userId: authUser.id, color: '#00BB00' } });
    },
    [insertBoard, authUser],
  );

  return (
    <div>
      BoardList
      <ul>
        {orderedBoards.map(board => (
          <li key={board.id}>
            <Link to={`/boards/${board.id}`}>{board.name}</Link>
          </li>
        ))}
        <li>
          <NewBoard onSubmit={newCardSubmitted} />
        </li>
      </ul>
    </div>
  );
}
