import React from 'react';
import { useBoardsSubscription } from '../../generated/graphql';
import BoardList from '../BoardList';
// import { Props } from './types';
// import styles from './BoardListView.module.css';

export default function BoardListView() {
  const { data, error } = useBoardsSubscription();

  return (
    <div>
      BoardListView
      {data ? (
        <BoardList boardList={data.board} />
      ) : error ? (
        <div>ERROR</div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
