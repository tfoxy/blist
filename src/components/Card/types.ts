import { CardListsSubscription } from '../../generated/graphql';

export interface Props {
  card: CardListsSubscription['card_list'][0]['cards'][0];
}
