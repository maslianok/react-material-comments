import React from 'react';
import { Route } from 'react-router';
import App from './containers/App';
import Task1 from './containers/Task1';
import Task2 from './containers/Task2';

export default (
  <Route path="/" component={App}>
    <Route path="/task1" component={Task1} />
    <Route path="/task2" component={Task2} />
  </Route>
)
