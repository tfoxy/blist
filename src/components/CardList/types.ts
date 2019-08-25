import { Card_List, CardListsSubscription } from '../../generated/graphql';

export interface Props {
  cardList: CardListsSubscription['card_list'][0];
}
