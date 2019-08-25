import React, { useMemo, useCallback } from 'react';
import { Props } from './types';
import calculateOrder from '../../services/calculateOrder';
import CardList from '../CardList';
import NewCardList from '../NewCardList';
import { useInsertCardListMutation } from '../../generated/graphql';
// import styles from './Board.module.css';

export default function Board({
  board,
  boardError,
  boardLoading,
  cardLists,
  cardListsError,
}: Props) {
  const [insertCardList] = useInsertCardListMutation();

  const orderedCardLists = useMemo(
    () => cardLists && cardLists.slice().sort((l, r) => l.order - r.order),
    [cardLists],
  );

  const newCardListSubmitted = useCallback(
    (card: { name: string }) => {
      if (!board) throw new Error('There must be a board');
      if (!orderedCardLists) throw new Error("This shouldn't happen");
      const order = calculateOrder(orderedCardLists.map(c => c.order), orderedCardLists.length);
      insertCardList({ variables: { name: card.name, boardId: board.id, order } });
    },
    [board, orderedCardLists, insertCardList],
  );

  if (boardError || cardListsError) {
    return <div>ERROR</div>;
  }

  if (boardLoading) {
    return <div>Loading board...</div>;
  }

  if (!board) {
    return <div>Board not found</div>;
  }

  return (
    <div>
      <h1>Board: {board.name}</h1>
      {orderedCardLists ? (
        <ul>
          {orderedCardLists.map(cardList => (
            <li key={cardList.id}>
              <CardList cardList={cardList} />
            </li>
          ))}
          <li>
            <NewCardList onSubmit={newCardListSubmitted} />
          </li>
        </ul>
      ) : (
        <span>Loading cards...</span>
      )}
    </div>
  );
}
