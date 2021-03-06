import React, {Component, PropTypes} from 'react';
import ListItem from 'material-ui/lib/lists/list-item';
import Avatar from 'material-ui/lib/avatar';
import MenuItem from 'material-ui/lib/menus/menu-item';
import MenuDivider from 'material-ui/lib/menus/menu-divider';
import FontIcon from 'material-ui/lib/font-icon';
import IconButton from 'material-ui/lib/icon-button';
import IconMenu from 'material-ui/lib/menus/icon-menu';

import s from './../../styles/task1.js';

const Colors = {
  darkBlack: '#000'
}

class RightIconMenu extends Component {

  render() {
    const iconButtonElement = (
      <IconButton>
        <svg fill="#000000" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
        </svg>
      </IconButton>
    );
    
    return (
      <IconMenu iconButtonElement={iconButtonElement}>
        <MenuItem primaryText="Hide" />
        <MenuItem primaryText="Delete" />
      </IconMenu>
    );
  }
}

export default RightIconMenu;