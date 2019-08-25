import React, { useCallback, useMemo } from 'react';
import { Props } from './types';
import { useInsertCardMutation } from '../../generated/graphql';
import calculateOrder from '../../services/calculateOrder';
import Card from '../Card';
import NewCard from '../NewCard';
// import styles from './CardList.module.css';

export default function CardList({ cardList }: Props) {
  const [insertCard] = useInsertCardMutation();

  const orderedCards = useMemo(() => cardList.cards.slice().sort((l, r) => l.order - r.order), [
    cardList.cards,
  ]);

  const newCardSubmitted = useCallback(
    (card: { name: string }) => {
      const order = calculateOrder(orderedCards.map(c => c.order), orderedCards.length);
      insertCard({ variables: { name: card.name, cardListId: cardList.id, order } });
    },
    [cardList, orderedCards, insertCard],
  );

  return (
    <div>
      List: {cardList.name}
      <br />
      Cards:
      <ul>
        {cardList.cards.map(card => (
          <li key={card.id}>
            <Card card={card} />
          </li>
        ))}
        <li>
          <NewCard onSubmit={newCardSubmitted} />
        </li>
      </ul>
    </div>
  );
}
