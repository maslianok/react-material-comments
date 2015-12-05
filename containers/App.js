import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router'
import injectTapEventPlugin from 'react-tap-event-plugin';

import TopBar from './../components/TopBar.js';

import './../styles/global.css';
import s from './../styles/app.js';

//Needed for onTouchTap
//Can go away when react 1.0 release
injectTapEventPlugin();

class App extends Component {
  render() {
    const {children} = this.props;

    return (
      <div style={s.app__wrapper}>
        <div>
          <TopBar goTo={this._goTo.bind(this)} selectedIndex={this.props.location.pathname.replace('/task', '')} />
        </div>
        <div style={s.app__content}>
          {children}
        </div>
      </div>
    )
  }

  _goTo(taskNumber) {
    this.props.pushState(null, `/task${taskNumber + 1}`)
  }
}

App.propTypes = {
  // Injected by React Router
  children: PropTypes.node,
  // Injected by React Redux
  pushState: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps, {pushState})(App)


