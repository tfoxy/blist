import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  uuid: any,
  timestamptz: any,
};

/** columns and relationships of "board" */
export type Board = {
  __typename?: 'board',
  /** An array relationship */
  board_users: Array<Board_User>,
  color: Scalars['String'],
  created_at: Scalars['timestamptz'],
  id: Scalars['uuid'],
  name: Scalars['String'],
  user_id: Scalars['uuid'],
};


/** columns and relationships of "board" */
export type BoardBoard_UsersArgs = {
  distinct_on?: Maybe<Array<Board_User_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Board_User_Order_By>>,
  where?: Maybe<Board_User_Bool_Exp>
};

/** input type for inserting array relation for remote table "board" */
export type Board_Arr_Rel_Insert_Input = {
  data: Array<Board_Insert_Input>,
  on_conflict?: Maybe<Board_On_Conflict>,
};

/** Boolean expression to filter rows from the table "board". All fields are combined with a logical 'AND'. */
export type Board_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Board_Bool_Exp>>>,
  _not?: Maybe<Board_Bool_Exp>,
  _or?: Maybe<Array<Maybe<Board_Bool_Exp>>>,
  board_users?: Maybe<Board_User_Bool_Exp>,
  color?: Maybe<Text_Comparison_Exp>,
  created_at?: Maybe<Timestamptz_Comparison_Exp>,
  id?: Maybe<Uuid_Comparison_Exp>,
  name?: Maybe<Text_Comparison_Exp>,
  user_id?: Maybe<Uuid_Comparison_Exp>,
};

/** unique or primary key constraints on table "board" */
export enum Board_Constraint {
  /** unique or primary key constraint */
  BoardPkey = 'Board_pkey'
}

/** input type for inserting data into table "board" */
export type Board_Insert_Input = {
  board_users?: Maybe<Board_User_Arr_Rel_Insert_Input>,
  color?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  user_id?: Maybe<Scalars['uuid']>,
};

/** response of any mutation on the table "board" */
export type Board_Mutation_Response = {
  __typename?: 'board_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<Board>,
};

/** input type for inserting object relation for remote table "board" */
export type Board_Obj_Rel_Insert_Input = {
  data: Board_Insert_Input,
  on_conflict?: Maybe<Board_On_Conflict>,
};

/** on conflict condition type for table "board" */
export type Board_On_Conflict = {
  constraint: Board_Constraint,
  update_columns: Array<Board_Update_Column>,
};

/** ordering options when selecting data from "board" */
export type Board_Order_By = {
  color?: Maybe<Order_By>,
  created_at?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
  user_id?: Maybe<Order_By>,
};

/** select columns of table "board" */
export enum Board_Select_Column {
  /** column name */
  Color = 'color',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "board" */
export type Board_Set_Input = {
  color?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
};

/** update columns of table "board" */
export enum Board_Update_Column {
  /** column name */
  Color = 'color',
  /** column name */
  Name = 'name'
}

/** columns and relationships of "board_user" */
export type Board_User = {
  __typename?: 'board_user',
  /** An object relationship */
  board: Board,
  board_id: Scalars['uuid'],
  created_at: Scalars['timestamptz'],
  /** An object relationship */
  user: User,
  user_id: Scalars['uuid'],
};

/** input type for inserting array relation for remote table "board_user" */
export type Board_User_Arr_Rel_Insert_Input = {
  data: Array<Board_User_Insert_Input>,
};

/** Boolean expression to filter rows from the table "board_user". All fields are combined with a logical 'AND'. */
export type Board_User_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Board_User_Bool_Exp>>>,
  _not?: Maybe<Board_User_Bool_Exp>,
  _or?: Maybe<Array<Maybe<Board_User_Bool_Exp>>>,
  board?: Maybe<Board_Bool_Exp>,
  board_id?: Maybe<Uuid_Comparison_Exp>,
  created_at?: Maybe<Timestamptz_Comparison_Exp>,
  user?: Maybe<User_Bool_Exp>,
  user_id?: Maybe<Uuid_Comparison_Exp>,
};

/** input type for inserting data into table "board_user" */
export type Board_User_Insert_Input = {
  board?: Maybe<Board_Obj_Rel_Insert_Input>,
  board_id?: Maybe<Scalars['uuid']>,
  user?: Maybe<User_Obj_Rel_Insert_Input>,
  user_id?: Maybe<Scalars['uuid']>,
};

/** response of any mutation on the table "board_user" */
export type Board_User_Mutation_Response = {
  __typename?: 'board_user_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<Board_User>,
};

/** input type for inserting object relation for remote table "board_user" */
export type Board_User_Obj_Rel_Insert_Input = {
  data: Board_User_Insert_Input,
};

/** ordering options when selecting data from "board_user" */
export type Board_User_Order_By = {
  board?: Maybe<Board_Order_By>,
  board_id?: Maybe<Order_By>,
  created_at?: Maybe<Order_By>,
  user?: Maybe<User_Order_By>,
  user_id?: Maybe<Order_By>,
};

/** select columns of table "board_user" */
export enum Board_User_Select_Column {
  /** column name */
  BoardId = 'board_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  UserId = 'user_id'
}

/** columns and relationships of "card" */
export type Card = {
  __typename?: 'card',
  /** An object relationship */
  card_list: Card_List,
  card_list_id: Scalars['uuid'],
  created_at: Scalars['timestamptz'],
  description: Scalars['String'],
  id: Scalars['uuid'],
  name: Scalars['String'],
  order: Scalars['Int'],
  updated_at: Scalars['timestamptz'],
};

/** input type for inserting array relation for remote table "card" */
export type Card_Arr_Rel_Insert_Input = {
  data: Array<Card_Insert_Input>,
  on_conflict?: Maybe<Card_On_Conflict>,
};

/** Boolean expression to filter rows from the table "card". All fields are combined with a logical 'AND'. */
export type Card_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Card_Bool_Exp>>>,
  _not?: Maybe<Card_Bool_Exp>,
  _or?: Maybe<Array<Maybe<Card_Bool_Exp>>>,
  card_list?: Maybe<Card_List_Bool_Exp>,
  card_list_id?: Maybe<Uuid_Comparison_Exp>,
  created_at?: Maybe<Timestamptz_Comparison_Exp>,
  description?: Maybe<Text_Comparison_Exp>,
  id?: Maybe<Uuid_Comparison_Exp>,
  name?: Maybe<Text_Comparison_Exp>,
  order?: Maybe<Integer_Comparison_Exp>,
  updated_at?: Maybe<Timestamptz_Comparison_Exp>,
};

/** unique or primary key constraints on table "card" */
export enum Card_Constraint {
  /** unique or primary key constraint */
  CardPkey = 'card_pkey'
}

/** input type for incrementing integer columne in table "card" */
export type Card_Inc_Input = {
  order?: Maybe<Scalars['Int']>,
};

/** input type for inserting data into table "card" */
export type Card_Insert_Input = {
  card_list?: Maybe<Card_List_Obj_Rel_Insert_Input>,
  card_list_id?: Maybe<Scalars['uuid']>,
  description?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  order?: Maybe<Scalars['Int']>,
};

/** columns and relationships of "card_list" */
export type Card_List = {
  __typename?: 'card_list',
  /** An object relationship */
  board: Board,
  board_id: Scalars['uuid'],
  /** An array relationship */
  cards: Array<Card>,
  created_at: Scalars['timestamptz'],
  id: Scalars['uuid'],
  name: Scalars['String'],
  order: Scalars['Int'],
  updated_at: Scalars['timestamptz'],
};


/** columns and relationships of "card_list" */
export type Card_ListCardsArgs = {
  distinct_on?: Maybe<Array<Card_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Card_Order_By>>,
  where?: Maybe<Card_Bool_Exp>
};

/** input type for inserting array relation for remote table "card_list" */
export type Card_List_Arr_Rel_Insert_Input = {
  data: Array<Card_List_Insert_Input>,
  on_conflict?: Maybe<Card_List_On_Conflict>,
};

/** Boolean expression to filter rows from the table "card_list". All fields are combined with a logical 'AND'. */
export type Card_List_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Card_List_Bool_Exp>>>,
  _not?: Maybe<Card_List_Bool_Exp>,
  _or?: Maybe<Array<Maybe<Card_List_Bool_Exp>>>,
  board?: Maybe<Board_Bool_Exp>,
  board_id?: Maybe<Uuid_Comparison_Exp>,
  cards?: Maybe<Card_Bool_Exp>,
  created_at?: Maybe<Timestamptz_Comparison_Exp>,
  id?: Maybe<Uuid_Comparison_Exp>,
  name?: Maybe<Text_Comparison_Exp>,
  order?: Maybe<Integer_Comparison_Exp>,
  updated_at?: Maybe<Timestamptz_Comparison_Exp>,
};

/** unique or primary key constraints on table "card_list" */
export enum Card_List_Constraint {
  /** unique or primary key constraint */
  CardListPkey = 'CardList_pkey'
}

/** input type for incrementing integer columne in table "card_list" */
export type Card_List_Inc_Input = {
  order?: Maybe<Scalars['Int']>,
};

/** input type for inserting data into table "card_list" */
export type Card_List_Insert_Input = {
  board?: Maybe<Board_Obj_Rel_Insert_Input>,
  board_id?: Maybe<Scalars['uuid']>,
  cards?: Maybe<Card_Arr_Rel_Insert_Input>,
  name?: Maybe<Scalars['String']>,
  order?: Maybe<Scalars['Int']>,
};

/** response of any mutation on the table "card_list" */
export type Card_List_Mutation_Response = {
  __typename?: 'card_list_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<Card_List>,
};

/** input type for inserting object relation for remote table "card_list" */
export type Card_List_Obj_Rel_Insert_Input = {
  data: Card_List_Insert_Input,
  on_conflict?: Maybe<Card_List_On_Conflict>,
};

/** on conflict condition type for table "card_list" */
export type Card_List_On_Conflict = {
  constraint: Card_List_Constraint,
  update_columns: Array<Card_List_Update_Column>,
};

/** ordering options when selecting data from "card_list" */
export type Card_List_Order_By = {
  board?: Maybe<Board_Order_By>,
  board_id?: Maybe<Order_By>,
  created_at?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
  order?: Maybe<Order_By>,
  updated_at?: Maybe<Order_By>,
};

/** select columns of table "card_list" */
export enum Card_List_Select_Column {
  /** column name */
  BoardId = 'board_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Order = 'order',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "card_list" */
export type Card_List_Set_Input = {
  name?: Maybe<Scalars['String']>,
  order?: Maybe<Scalars['Int']>,
};

/** update columns of table "card_list" */
export enum Card_List_Update_Column {
  /** column name */
  Name = 'name',
  /** column name */
  Order = 'order'
}

/** response of any mutation on the table "card" */
export type Card_Mutation_Response = {
  __typename?: 'card_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<Card>,
};

/** input type for inserting object relation for remote table "card" */
export type Card_Obj_Rel_Insert_Input = {
  data: Card_Insert_Input,
  on_conflict?: Maybe<Card_On_Conflict>,
};

/** on conflict condition type for table "card" */
export type Card_On_Conflict = {
  constraint: Card_Constraint,
  update_columns: Array<Card_Update_Column>,
};

/** ordering options when selecting data from "card" */
export type Card_Order_By = {
  card_list?: Maybe<Card_List_Order_By>,
  card_list_id?: Maybe<Order_By>,
  created_at?: Maybe<Order_By>,
  description?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
  order?: Maybe<Order_By>,
  updated_at?: Maybe<Order_By>,
};

/** select columns of table "card" */
export enum Card_Select_Column {
  /** column name */
  CardListId = 'card_list_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Order = 'order',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "card" */
export type Card_Set_Input = {
  card_list_id?: Maybe<Scalars['uuid']>,
  description?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  order?: Maybe<Scalars['Int']>,
};

/** update columns of table "card" */
export enum Card_Update_Column {
  /** column name */
  CardListId = 'card_list_id',
  /** column name */
  Description = 'description',
  /** column name */
  Name = 'name',
  /** column name */
  Order = 'order'
}

/** conflict action */
export enum Conflict_Action {
  /** ignore the insert on this row */
  Ignore = 'ignore',
  /** update the row with the given values */
  Update = 'update'
}

/** expression to compare columns of type integer. All fields are combined with logical 'AND'. */
export type Integer_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>,
  _gt?: Maybe<Scalars['Int']>,
  _gte?: Maybe<Scalars['Int']>,
  _in?: Maybe<Array<Scalars['Int']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _lt?: Maybe<Scalars['Int']>,
  _lte?: Maybe<Scalars['Int']>,
  _neq?: Maybe<Scalars['Int']>,
  _nin?: Maybe<Array<Scalars['Int']>>,
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root',
  /** delete data from the table: "board" */
  delete_board?: Maybe<Board_Mutation_Response>,
  /** delete data from the table: "board_user" */
  delete_board_user?: Maybe<Board_User_Mutation_Response>,
  /** delete data from the table: "card" */
  delete_card?: Maybe<Card_Mutation_Response>,
  /** delete data from the table: "card_list" */
  delete_card_list?: Maybe<Card_List_Mutation_Response>,
  /** insert data into the table: "board" */
  insert_board?: Maybe<Board_Mutation_Response>,
  /** insert data into the table: "board_user" */
  insert_board_user?: Maybe<Board_User_Mutation_Response>,
  /** insert data into the table: "card" */
  insert_card?: Maybe<Card_Mutation_Response>,
  /** insert data into the table: "card_list" */
  insert_card_list?: Maybe<Card_List_Mutation_Response>,
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>,
  /** update data of the table: "board" */
  update_board?: Maybe<Board_Mutation_Response>,
  /** update data of the table: "card" */
  update_card?: Maybe<Card_Mutation_Response>,
  /** update data of the table: "card_list" */
  update_card_list?: Maybe<Card_List_Mutation_Response>,
};


/** mutation root */
export type Mutation_RootDelete_BoardArgs = {
  where: Board_Bool_Exp
};


/** mutation root */
export type Mutation_RootDelete_Board_UserArgs = {
  where: Board_User_Bool_Exp
};


/** mutation root */
export type Mutation_RootDelete_CardArgs = {
  where: Card_Bool_Exp
};


/** mutation root */
export type Mutation_RootDelete_Card_ListArgs = {
  where: Card_List_Bool_Exp
};


/** mutation root */
export type Mutation_RootInsert_BoardArgs = {
  objects: Array<Board_Insert_Input>,
  on_conflict?: Maybe<Board_On_Conflict>
};


/** mutation root */
export type Mutation_RootInsert_Board_UserArgs = {
  objects: Array<Board_User_Insert_Input>
};


/** mutation root */
export type Mutation_RootInsert_CardArgs = {
  objects: Array<Card_Insert_Input>,
  on_conflict?: Maybe<Card_On_Conflict>
};


/** mutation root */
export type Mutation_RootInsert_Card_ListArgs = {
  objects: Array<Card_List_Insert_Input>,
  on_conflict?: Maybe<Card_List_On_Conflict>
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>
};


/** mutation root */
export type Mutation_RootUpdate_BoardArgs = {
  _set?: Maybe<Board_Set_Input>,
  where: Board_Bool_Exp
};


/** mutation root */
export type Mutation_RootUpdate_CardArgs = {
  _inc?: Maybe<Card_Inc_Input>,
  _set?: Maybe<Card_Set_Input>,
  where: Card_Bool_Exp
};


/** mutation root */
export type Mutation_RootUpdate_Card_ListArgs = {
  _inc?: Maybe<Card_List_Inc_Input>,
  _set?: Maybe<Card_List_Set_Input>,
  where: Card_List_Bool_Exp
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root',
  /** fetch data from the table: "board" */
  board: Array<Board>,
  /** fetch data from the table: "board" using primary key columns */
  board_by_pk?: Maybe<Board>,
  /** fetch data from the table: "board_user" */
  board_user: Array<Board_User>,
  /** fetch data from the table: "board_user" using primary key columns */
  board_user_by_pk?: Maybe<Board_User>,
  /** fetch data from the table: "card" */
  card: Array<Card>,
  /** fetch data from the table: "card" using primary key columns */
  card_by_pk?: Maybe<Card>,
  /** fetch data from the table: "card_list" */
  card_list: Array<Card_List>,
  /** fetch data from the table: "card_list" using primary key columns */
  card_list_by_pk?: Maybe<Card_List>,
  /** fetch data from the table: "user" */
  user: Array<User>,
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>,
};


/** query root */
export type Query_RootBoardArgs = {
  distinct_on?: Maybe<Array<Board_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Board_Order_By>>,
  where?: Maybe<Board_Bool_Exp>
};


/** query root */
export type Query_RootBoard_By_PkArgs = {
  id: Scalars['uuid']
};


/** query root */
export type Query_RootBoard_UserArgs = {
  distinct_on?: Maybe<Array<Board_User_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Board_User_Order_By>>,
  where?: Maybe<Board_User_Bool_Exp>
};


/** query root */
export type Query_RootBoard_User_By_PkArgs = {
  board_id: Scalars['uuid'],
  user_id: Scalars['uuid']
};


/** query root */
export type Query_RootCardArgs = {
  distinct_on?: Maybe<Array<Card_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Card_Order_By>>,
  where?: Maybe<Card_Bool_Exp>
};


/** query root */
export type Query_RootCard_By_PkArgs = {
  id: Scalars['uuid']
};


/** query root */
export type Query_RootCard_ListArgs = {
  distinct_on?: Maybe<Array<Card_List_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Card_List_Order_By>>,
  where?: Maybe<Card_List_Bool_Exp>
};


/** query root */
export type Query_RootCard_List_By_PkArgs = {
  id: Scalars['uuid']
};


/** query root */
export type Query_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<User_Order_By>>,
  where?: Maybe<User_Bool_Exp>
};


/** query root */
export type Query_RootUser_By_PkArgs = {
  id: Scalars['uuid']
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root',
  /** fetch data from the table: "board" */
  board: Array<Board>,
  /** fetch data from the table: "board" using primary key columns */
  board_by_pk?: Maybe<Board>,
  /** fetch data from the table: "board_user" */
  board_user: Array<Board_User>,
  /** fetch data from the table: "board_user" using primary key columns */
  board_user_by_pk?: Maybe<Board_User>,
  /** fetch data from the table: "card" */
  card: Array<Card>,
  /** fetch data from the table: "card" using primary key columns */
  card_by_pk?: Maybe<Card>,
  /** fetch data from the table: "card_list" */
  card_list: Array<Card_List>,
  /** fetch data from the table: "card_list" using primary key columns */
  card_list_by_pk?: Maybe<Card_List>,
  /** fetch data from the table: "user" */
  user: Array<User>,
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>,
};


/** subscription root */
export type Subscription_RootBoardArgs = {
  distinct_on?: Maybe<Array<Board_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Board_Order_By>>,
  where?: Maybe<Board_Bool_Exp>
};


/** subscription root */
export type Subscription_RootBoard_By_PkArgs = {
  id: Scalars['uuid']
};


/** subscription root */
export type Subscription_RootBoard_UserArgs = {
  distinct_on?: Maybe<Array<Board_User_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Board_User_Order_By>>,
  where?: Maybe<Board_User_Bool_Exp>
};


/** subscription root */
export type Subscription_RootBoard_User_By_PkArgs = {
  board_id: Scalars['uuid'],
  user_id: Scalars['uuid']
};


/** subscription root */
export type Subscription_RootCardArgs = {
  distinct_on?: Maybe<Array<Card_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Card_Order_By>>,
  where?: Maybe<Card_Bool_Exp>
};


/** subscription root */
export type Subscription_RootCard_By_PkArgs = {
  id: Scalars['uuid']
};


/** subscription root */
export type Subscription_RootCard_ListArgs = {
  distinct_on?: Maybe<Array<Card_List_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Card_List_Order_By>>,
  where?: Maybe<Card_List_Bool_Exp>
};


/** subscription root */
export type Subscription_RootCard_List_By_PkArgs = {
  id: Scalars['uuid']
};


/** subscription root */
export type Subscription_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<User_Order_By>>,
  where?: Maybe<User_Bool_Exp>
};


/** subscription root */
export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['uuid']
};

/** expression to compare columns of type text. All fields are combined with logical 'AND'. */
export type Text_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>,
  _gt?: Maybe<Scalars['String']>,
  _gte?: Maybe<Scalars['String']>,
  _ilike?: Maybe<Scalars['String']>,
  _in?: Maybe<Array<Scalars['String']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _like?: Maybe<Scalars['String']>,
  _lt?: Maybe<Scalars['String']>,
  _lte?: Maybe<Scalars['String']>,
  _neq?: Maybe<Scalars['String']>,
  _nilike?: Maybe<Scalars['String']>,
  _nin?: Maybe<Array<Scalars['String']>>,
  _nlike?: Maybe<Scalars['String']>,
  _nsimilar?: Maybe<Scalars['String']>,
  _similar?: Maybe<Scalars['String']>,
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>,
  _gt?: Maybe<Scalars['timestamptz']>,
  _gte?: Maybe<Scalars['timestamptz']>,
  _in?: Maybe<Array<Scalars['timestamptz']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _lt?: Maybe<Scalars['timestamptz']>,
  _lte?: Maybe<Scalars['timestamptz']>,
  _neq?: Maybe<Scalars['timestamptz']>,
  _nin?: Maybe<Array<Scalars['timestamptz']>>,
};

/** columns and relationships of "user" */
export type User = {
  __typename?: 'user',
  created_at: Scalars['timestamptz'],
  id: Scalars['uuid'],
  name: Scalars['String'],
};

/** input type for inserting array relation for remote table "user" */
export type User_Arr_Rel_Insert_Input = {
  data: Array<User_Insert_Input>,
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: Maybe<Array<Maybe<User_Bool_Exp>>>,
  _not?: Maybe<User_Bool_Exp>,
  _or?: Maybe<Array<Maybe<User_Bool_Exp>>>,
  created_at?: Maybe<Timestamptz_Comparison_Exp>,
  id?: Maybe<Uuid_Comparison_Exp>,
  name?: Maybe<Text_Comparison_Exp>,
};

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  id?: Maybe<Scalars['uuid']>,
  name?: Maybe<Scalars['String']>,
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  __typename?: 'user_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<User>,
};

/** input type for inserting object relation for remote table "user" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input,
};

/** ordering options when selecting data from "user" */
export type User_Order_By = {
  created_at?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}


/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>,
  _gt?: Maybe<Scalars['uuid']>,
  _gte?: Maybe<Scalars['uuid']>,
  _in?: Maybe<Array<Scalars['uuid']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _lt?: Maybe<Scalars['uuid']>,
  _lte?: Maybe<Scalars['uuid']>,
  _neq?: Maybe<Scalars['uuid']>,
  _nin?: Maybe<Array<Scalars['uuid']>>,
};
export type InsertBoardMutationVariables = {
  name: Scalars['String'],
  userId: Scalars['uuid'],
  color: Scalars['String']
};


export type InsertBoardMutation = (
  { __typename?: 'mutation_root' }
  & { insert_board: Maybe<(
    { __typename?: 'board_mutation_response' }
    & { returning: Array<(
      { __typename?: 'board' }
      & Pick<Board, 'id'>
    )> }
  )> }
);

export type InsertCardMutationVariables = {
  name: Scalars['String'],
  cardListId: Scalars['uuid'],
  order: Scalars['Int']
};


export type InsertCardMutation = (
  { __typename?: 'mutation_root' }
  & { insert_card: Maybe<(
    { __typename?: 'card_mutation_response' }
    & { returning: Array<(
      { __typename?: 'card' }
      & Pick<Card, 'id'>
    )> }
  )> }
);

export type InsertCardListMutationVariables = {
  name: Scalars['String'],
  boardId: Scalars['uuid'],
  order: Scalars['Int']
};


export type InsertCardListMutation = (
  { __typename?: 'mutation_root' }
  & { insert_card_list: Maybe<(
    { __typename?: 'card_list_mutation_response' }
    & { returning: Array<(
      { __typename?: 'card_list' }
      & Pick<Card_List, 'id'>
    )> }
  )> }
);

export type InsertUserMutationVariables = {
  id: Scalars['uuid'],
  name: Scalars['String']
};


export type InsertUserMutation = (
  { __typename?: 'mutation_root' }
  & { insert_user: Maybe<(
    { __typename?: 'user_mutation_response' }
    & { returning: Array<(
      { __typename?: 'user' }
      & Pick<User, 'id' | 'name' | 'created_at'>
    )> }
  )> }
);

export type BoardSubscriptionVariables = {
  boardId: Scalars['uuid']
};


export type BoardSubscription = (
  { __typename?: 'subscription_root' }
  & { board_by_pk: Maybe<(
    { __typename?: 'board' }
    & Pick<Board, 'id' | 'name' | 'created_at' | 'color'>
  )> }
);

export type BoardsSubscriptionVariables = {};


export type BoardsSubscription = (
  { __typename?: 'subscription_root' }
  & { board: Array<(
    { __typename?: 'board' }
    & Pick<Board, 'id' | 'name' | 'created_at' | 'color'>
  )> }
);

export type CardListsSubscriptionVariables = {
  boardId: Scalars['uuid']
};


export type CardListsSubscription = (
  { __typename?: 'subscription_root' }
  & { card_list: Array<(
    { __typename?: 'card_list' }
    & Pick<Card_List, 'id' | 'name' | 'created_at' | 'order'>
    & { cards: Array<(
      { __typename?: 'card' }
      & Pick<Card, 'id' | 'name' | 'created_at' | 'order' | 'description'>
    )> }
  )> }
);

export const InsertBoardDocument = gql`
    mutation insertBoard($name: String!, $userId: uuid!, $color: String!) {
  insert_board(objects: {name: $name, user_id: $userId, color: $color}) {
    returning {
      id
    }
  }
}
    `;
export type InsertBoardMutationFn = ApolloReactCommon.MutationFunction<InsertBoardMutation, InsertBoardMutationVariables>;
export type InsertBoardComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<InsertBoardMutation, InsertBoardMutationVariables>, 'mutation'>;

    export const InsertBoardComponent = (props: InsertBoardComponentProps) => (
      <ApolloReactComponents.Mutation<InsertBoardMutation, InsertBoardMutationVariables> mutation={InsertBoardDocument} {...props} />
    );
    
export type InsertBoardProps<TChildProps = {}> = ApolloReactHoc.MutateProps<InsertBoardMutation, InsertBoardMutationVariables> & TChildProps;
export function withInsertBoard<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  InsertBoardMutation,
  InsertBoardMutationVariables,
  InsertBoardProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, InsertBoardMutation, InsertBoardMutationVariables, InsertBoardProps<TChildProps>>(InsertBoardDocument, {
      alias: 'withInsertBoard',
      ...operationOptions
    });
};

    export function useInsertBoardMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<InsertBoardMutation, InsertBoardMutationVariables>) {
      return ApolloReactHooks.useMutation<InsertBoardMutation, InsertBoardMutationVariables>(InsertBoardDocument, baseOptions);
    };
export type InsertBoardMutationHookResult = ReturnType<typeof useInsertBoardMutation>;
export type InsertBoardMutationResult = ApolloReactCommon.MutationResult<InsertBoardMutation>;
export type InsertBoardMutationOptions = ApolloReactCommon.BaseMutationOptions<InsertBoardMutation, InsertBoardMutationVariables>;
export const InsertCardDocument = gql`
    mutation insertCard($name: String!, $cardListId: uuid!, $order: Int!) {
  insert_card(objects: {name: $name, card_list_id: $cardListId, order: $order}) {
    returning {
      id
    }
  }
}
    `;
export type InsertCardMutationFn = ApolloReactCommon.MutationFunction<InsertCardMutation, InsertCardMutationVariables>;
export type InsertCardComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<InsertCardMutation, InsertCardMutationVariables>, 'mutation'>;

    export const InsertCardComponent = (props: InsertCardComponentProps) => (
      <ApolloReactComponents.Mutation<InsertCardMutation, InsertCardMutationVariables> mutation={InsertCardDocument} {...props} />
    );
    
export type InsertCardProps<TChildProps = {}> = ApolloReactHoc.MutateProps<InsertCardMutation, InsertCardMutationVariables> & TChildProps;
export function withInsertCard<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  InsertCardMutation,
  InsertCardMutationVariables,
  InsertCardProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, InsertCardMutation, InsertCardMutationVariables, InsertCardProps<TChildProps>>(InsertCardDocument, {
      alias: 'withInsertCard',
      ...operationOptions
    });
};

    export function useInsertCardMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<InsertCardMutation, InsertCardMutationVariables>) {
      return ApolloReactHooks.useMutation<InsertCardMutation, InsertCardMutationVariables>(InsertCardDocument, baseOptions);
    };
export type InsertCardMutationHookResult = ReturnType<typeof useInsertCardMutation>;
export type InsertCardMutationResult = ApolloReactCommon.MutationResult<InsertCardMutation>;
export type InsertCardMutationOptions = ApolloReactCommon.BaseMutationOptions<InsertCardMutation, InsertCardMutationVariables>;
export const InsertCardListDocument = gql`
    mutation insertCardList($name: String!, $boardId: uuid!, $order: Int!) {
  insert_card_list(objects: {name: $name, board_id: $boardId, order: $order}) {
    returning {
      id
    }
  }
}
    `;
export type InsertCardListMutationFn = ApolloReactCommon.MutationFunction<InsertCardListMutation, InsertCardListMutationVariables>;
export type InsertCardListComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<InsertCardListMutation, InsertCardListMutationVariables>, 'mutation'>;

    export const InsertCardListComponent = (props: InsertCardListComponentProps) => (
      <ApolloReactComponents.Mutation<InsertCardListMutation, InsertCardListMutationVariables> mutation={InsertCardListDocument} {...props} />
    );
    
export type InsertCardListProps<TChildProps = {}> = ApolloReactHoc.MutateProps<InsertCardListMutation, InsertCardListMutationVariables> & TChildProps;
export function withInsertCardList<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  InsertCardListMutation,
  InsertCardListMutationVariables,
  InsertCardListProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, InsertCardListMutation, InsertCardListMutationVariables, InsertCardListProps<TChildProps>>(InsertCardListDocument, {
      alias: 'withInsertCardList',
      ...operationOptions
    });
};

    export function useInsertCardListMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<InsertCardListMutation, InsertCardListMutationVariables>) {
      return ApolloReactHooks.useMutation<InsertCardListMutation, InsertCardListMutationVariables>(InsertCardListDocument, baseOptions);
    };
export type InsertCardListMutationHookResult = ReturnType<typeof useInsertCardListMutation>;
export type InsertCardListMutationResult = ApolloReactCommon.MutationResult<InsertCardListMutation>;
export type InsertCardListMutationOptions = ApolloReactCommon.BaseMutationOptions<InsertCardListMutation, InsertCardListMutationVariables>;
export const InsertUserDocument = gql`
    mutation insertUser($id: uuid!, $name: String!) {
  insert_user(objects: {id: $id, name: $name}) {
    returning {
      id
      name
      created_at
    }
  }
}
    `;
export type InsertUserMutationFn = ApolloReactCommon.MutationFunction<InsertUserMutation, InsertUserMutationVariables>;
export type InsertUserComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<InsertUserMutation, InsertUserMutationVariables>, 'mutation'>;

    export const InsertUserComponent = (props: InsertUserComponentProps) => (
      <ApolloReactComponents.Mutation<InsertUserMutation, InsertUserMutationVariables> mutation={InsertUserDocument} {...props} />
    );
    
export type InsertUserProps<TChildProps = {}> = ApolloReactHoc.MutateProps<InsertUserMutation, InsertUserMutationVariables> & TChildProps;
export function withInsertUser<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  InsertUserMutation,
  InsertUserMutationVariables,
  InsertUserProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, InsertUserMutation, InsertUserMutationVariables, InsertUserProps<TChildProps>>(InsertUserDocument, {
      alias: 'withInsertUser',
      ...operationOptions
    });
};

    export function useInsertUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<InsertUserMutation, InsertUserMutationVariables>) {
      return ApolloReactHooks.useMutation<InsertUserMutation, InsertUserMutationVariables>(InsertUserDocument, baseOptions);
    };
export type InsertUserMutationHookResult = ReturnType<typeof useInsertUserMutation>;
export type InsertUserMutationResult = ApolloReactCommon.MutationResult<InsertUserMutation>;
export type InsertUserMutationOptions = ApolloReactCommon.BaseMutationOptions<InsertUserMutation, InsertUserMutationVariables>;
export const BoardDocument = gql`
    subscription board($boardId: uuid!) {
  board_by_pk(id: $boardId) {
    id
    name
    created_at
    color
  }
}
    `;
export type BoardComponentProps = Omit<ApolloReactComponents.SubscriptionComponentOptions<BoardSubscription, BoardSubscriptionVariables>, 'subscription'>;

    export const BoardComponent = (props: BoardComponentProps) => (
      <ApolloReactComponents.Subscription<BoardSubscription, BoardSubscriptionVariables> subscription={BoardDocument} {...props} />
    );
    
export type BoardProps<TChildProps = {}> = ApolloReactHoc.DataProps<BoardSubscription, BoardSubscriptionVariables> & TChildProps;
export function withBoard<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  BoardSubscription,
  BoardSubscriptionVariables,
  BoardProps<TChildProps>>) {
    return ApolloReactHoc.withSubscription<TProps, BoardSubscription, BoardSubscriptionVariables, BoardProps<TChildProps>>(BoardDocument, {
      alias: 'withBoard',
      ...operationOptions
    });
};

    export function useBoardSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<BoardSubscription, BoardSubscriptionVariables>) {
      return ApolloReactHooks.useSubscription<BoardSubscription, BoardSubscriptionVariables>(BoardDocument, baseOptions);
    };
export type BoardSubscriptionHookResult = ReturnType<typeof useBoardSubscription>;
export type BoardSubscriptionResult = ApolloReactCommon.SubscriptionResult<BoardSubscription>;
export const BoardsDocument = gql`
    subscription boards {
  board {
    id
    name
    created_at
    color
  }
}
    `;
export type BoardsComponentProps = Omit<ApolloReactComponents.SubscriptionComponentOptions<BoardsSubscription, BoardsSubscriptionVariables>, 'subscription'>;

    export const BoardsComponent = (props: BoardsComponentProps) => (
      <ApolloReactComponents.Subscription<BoardsSubscription, BoardsSubscriptionVariables> subscription={BoardsDocument} {...props} />
    );
    
export type BoardsProps<TChildProps = {}> = ApolloReactHoc.DataProps<BoardsSubscription, BoardsSubscriptionVariables> & TChildProps;
export function withBoards<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  BoardsSubscription,
  BoardsSubscriptionVariables,
  BoardsProps<TChildProps>>) {
    return ApolloReactHoc.withSubscription<TProps, BoardsSubscription, BoardsSubscriptionVariables, BoardsProps<TChildProps>>(BoardsDocument, {
      alias: 'withBoards',
      ...operationOptions
    });
};

    export function useBoardsSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<BoardsSubscription, BoardsSubscriptionVariables>) {
      return ApolloReactHooks.useSubscription<BoardsSubscription, BoardsSubscriptionVariables>(BoardsDocument, baseOptions);
    };
export type BoardsSubscriptionHookResult = ReturnType<typeof useBoardsSubscription>;
export type BoardsSubscriptionResult = ApolloReactCommon.SubscriptionResult<BoardsSubscription>;
export const CardListsDocument = gql`
    subscription cardLists($boardId: uuid!) {
  card_list(where: {board_id: {_eq: $boardId}}) {
    id
    name
    created_at
    order
    cards {
      id
      name
      created_at
      order
      description
    }
  }
}
    `;
export type CardListsComponentProps = Omit<ApolloReactComponents.SubscriptionComponentOptions<CardListsSubscription, CardListsSubscriptionVariables>, 'subscription'>;

    export const CardListsComponent = (props: CardListsComponentProps) => (
      <ApolloReactComponents.Subscription<CardListsSubscription, CardListsSubscriptionVariables> subscription={CardListsDocument} {...props} />
    );
    
export type CardListsProps<TChildProps = {}> = ApolloReactHoc.DataProps<CardListsSubscription, CardListsSubscriptionVariables> & TChildProps;
export function withCardLists<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CardListsSubscription,
  CardListsSubscriptionVariables,
  CardListsProps<TChildProps>>) {
    return ApolloReactHoc.withSubscription<TProps, CardListsSubscription, CardListsSubscriptionVariables, CardListsProps<TChildProps>>(CardListsDocument, {
      alias: 'withCardLists',
      ...operationOptions
    });
};

    export function useCardListsSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<CardListsSubscription, CardListsSubscriptionVariables>) {
      return ApolloReactHooks.useSubscription<CardListsSubscription, CardListsSubscriptionVariables>(CardListsDocument, baseOptions);
    };
export type CardListsSubscriptionHookResult = ReturnType<typeof useCardListsSubscription>;
export type CardListsSubscriptionResult = ApolloReactCommon.SubscriptionResult<CardListsSubscription>;