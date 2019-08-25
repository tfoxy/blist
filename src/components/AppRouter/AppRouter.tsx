import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import AuthHandler from '../AuthHandler';
import BaseView from '../BaseView';
import BoardView from '../BoardView';
import NotFoundView from '../NotFoundView';
import BoardListView from '../BoardListView';
// import { Props } from './types';
// import styles from './AppRouter.module.css';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <AuthHandler>
        <BaseView>
          <Switch>
            <Route path="/" exact render={() => <Redirect to="/boards" />} />
            <Route path="/boards" exact component={BoardListView}></Route>
            <Route
              path={['/boards/:boardId', '/boards/:boardId/cards/:cardId']}
              exact
              render={props => <BoardView {...props.match.params} />}
            ></Route>
            <Route component={NotFoundView}></Route>
          </Switch>
        </BaseView>
      </AuthHandler>
    </BrowserRouter>
  );
}
