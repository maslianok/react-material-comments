import React, {Component, PropTypes} from 'react';
import ListItem from 'material-ui/lib/lists/list-item';
import Avatar from 'material-ui/lib/avatar';
import MenuItem from 'material-ui/lib/menus/menu-item';
import IconButton from 'material-ui/lib/icon-button';
import IconMenu from 'material-ui/lib/menus/icon-menu';

import s from './../../styles/task1.js';

import RightIconMenu from './RightIconMenu';

class CommentItem extends Component {
  render() {
    const {comment} = this.props;

    const iconButtonElement = (
      <IconButton>
        <svg fill="#000000" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
        </svg>
      </IconButton>
    );
    
    const rightIconMenu = (
      <IconMenu iconButtonElement={iconButtonElement}>
        <MenuItem
            primaryText={comment.is_hidden ? "Show" : "Hide"} 
            onClick={this._toggleVisibility.bind(this, !comment.is_hidden)} />
        <MenuItem 
            primaryText={comment.is_deleted ? "Restore" : "Delete"} 
            onClick={this._toggleDelete.bind(this, !comment.is_deleted)} />
      </IconMenu>
    );

    const itemStyles = {
      color: comment.is_hidden ? '#aaa' : '#444',
      textDecoration: comment.is_deleted ? 'line-through' : 'none'
    }
    const avatarStyles = {
      opacity: comment.is_hidden ? 0.3 : 1,
    }

    return (
      <ListItem
        style={itemStyles}
        leftAvatar={<Avatar style={avatarStyles}>{comment.from.name[0]}</Avatar>}
        rightIconButton={rightIconMenu}
        primaryText={comment.from.name}
        secondaryText={<p>{comment.message}</p>}
        secondaryTextLines={2} 
        onTouchTap={this._onClick.bind(this)} />
    )
  }

  _onClick() {
    var win = window.open(this.props.comment.link, '_blank');
    win.focus();
  }

  _toggleDelete(shouldDelete) {
    this.props.deleteAction(this.props.comment.id, shouldDelete);
  }

  _toggleVisibility(shouldHide) {
    this.props.hideAction(this.props.comment.id, shouldHide);
  }
}

export default CommentItem;