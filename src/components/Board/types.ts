import { BoardSubscription, CardListsSubscription } from '../../generated/graphql';
import { ApolloError } from 'apollo-client';

export interface Props {
  board: BoardSubscription['board_by_pk'] | undefined;
  boardError: ApolloError | undefined;
  boardLoading: boolean;
  cardLists: CardListsSubscription['card_list'] | undefined;
  cardListsError: ApolloError | undefined;
}
