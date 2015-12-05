import React, {Component, PropTypes} from 'react';
import AppBar from 'material-ui/lib/app-bar';
import FlatButton from 'material-ui/lib/flat-button';

import s from './../styles/app.js';

const taskLinks = ['Simple web interface', 'UI Design'];

class TopBar extends Component {
  render() {
    const {goTo, selectedIndex} = this.props;

    const btns = (
      <div>
        {taskLinks.map((el, i) => {
          const btnStyles = Object.assign({}, s.topBar__btn, selectedIndex == i + 1 ? s.topBar__btn_active : {});
          return <FlatButton key={i} label={el} style={btnStyles} onTouchTap={() => goTo(i)} />
        })}
      </div>
    );

    return <AppBar style={s.topBar} iconElementLeft={btns} />;
  }
}

TopBar.propTypes = {
  goTo: PropTypes.func,
}

export default TopBar;
