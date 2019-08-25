import React from 'react';
import { Props } from './types';
import { useBoardSubscription, useCardListsSubscription } from '../../generated/graphql';
import Board from '../Board';
// import styles from './BoardView.module.css';

export default function BoardView({ boardId }: Props) {
  const { data: boardData, error: boardError, loading: boardLoading } = useBoardSubscription({
    variables: {
      boardId,
    },
  });
  const { data: cardListsData, error: cardListsError } = useCardListsSubscription({
    variables: { boardId },
  });

  return (
    <Board
      board={boardData && boardData.board_by_pk}
      boardError={boardError}
      boardLoading={boardLoading}
      cardLists={cardListsData && cardListsData.card_list}
      cardListsError={cardListsError}
    />
  );
}
