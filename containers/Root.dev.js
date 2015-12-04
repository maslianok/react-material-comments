import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import { ReduxRouter } from 'redux-router'
import DevTools from './DevTools'

import s from './../styles/app.js';

export default class Root extends Component {
  render() {
    const { store } = this.props
    return (
      <Provider store={store}>
        <div style={s.root__wrapper}>
          <ReduxRouter />
          <DevTools />
        </div>
      </Provider>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired
}
