import { BoardsSubscriptionResult, BoardsSubscription } from '../../generated/graphql';

export interface Props {
  boardList: BoardsSubscription['board'];
}
