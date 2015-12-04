import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router'
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/lib/app-bar';
import FlatButton from 'material-ui/lib/flat-button';

import './../styles/global.css';
import s from './../styles/app.js';

//Needed for onTouchTap
//Can go away when react 1.0 release
injectTapEventPlugin();

class App extends Component {

  render() {
    const { children } = this.props;

    const menuBtns = (
      <div>
        <FlatButton key="task1" label="Task1" style={s.menuBtnsStyle} onTouchTap={this._goTo.bind(this, 1)} />
        <FlatButton key="task2" label="Task2" style={s.menuBtnsStyle} onTouchTap={this._goTo.bind(this, 2)} />
      </div>
    );

    return (
      <div className="">
        <div>
          <AppBar style={s.topBarStyles} iconElementLeft={menuBtns} />
        </div>
        <div>
          {children}
        </div>
      </div>
    )
  }

  _goTo(taskNumber) {
    this.props.pushState(null, `/task${taskNumber}`)
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


