import React from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import BaseView from '../BaseView';
import BoardView from '../BoardView';
import HomeView from '../HomeView';
import NotFoundView from '../NotFoundView';
import BoardListView from '../BoardListView';
// import { Props } from './types';
// import styles from './AppRouter.module.css';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={props => <HomeView history={props.history} />} />
        <Route
          render={props => (
            <BaseView history={props.history}>
              <Switch>
                <Route path="/boards" exact component={BoardListView}></Route>
                <Route
                  path={['/boards/:boardId', '/boards/:boardId/cards/:cardId']}
                  exact
                  render={props => <BoardView {...props.match.params} />}
                ></Route>
                <Route component={NotFoundView}></Route>
              </Switch>
            </BaseView>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}
