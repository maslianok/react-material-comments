import { createStore, applyMiddleware, compose } from 'redux'
import { reduxReactRouter } from 'redux-router'
import DevTools from '../containers/DevTools'
import createHistory from 'history/lib/createBrowserHistory'
import routes from '../routes'
import rootReducer from '../reducers'
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import reduxPromise from 'redux-promise-middleware';

const loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true
});

const finalCreateStore = compose(
  applyMiddleware(thunkMiddleware, reduxPromise(), loggerMiddleware),
  reduxReactRouter({routes, createHistory}),
  DevTools.instrument(),
)(createStore);

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
