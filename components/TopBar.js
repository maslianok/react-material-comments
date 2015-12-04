import React, {Component, PropTypes} from 'react';
import AppBar from 'material-ui/lib/app-bar';
import FlatButton from 'material-ui/lib/flat-button';

import s from './../styles/app.js';

const taskLinks = ['Simple web interface', 'UI Design'];

class TopBar extends Component {
  render() {
    const {goTo} = this.props;

    const btns = (
      <div>
        {taskLinks.map((el, i) => <FlatButton key={i} label={el} style={s.topBar__btn} onTouchTap={() => goTo(i)} />)}
      </div>
    );

    return <AppBar style={s.topBar} iconElementLeft={btns} />;
  }
}

TopBar.propTypes = {
  goTo: PropTypes.func,
}

export default TopBar;
