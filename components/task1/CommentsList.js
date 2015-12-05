import React, {Component, PropTypes} from 'react';
import List from 'material-ui/lib/lists/list';
import ListDivider from 'material-ui/lib/lists/list-divider';
import ListItem from 'material-ui/lib/lists/list-item';
import Avatar from 'material-ui/lib/avatar';
import MenuItem from 'material-ui/lib/menus/menu-item';
import MenuDivider from 'material-ui/lib/menus/menu-divider';
import FontIcon from 'material-ui/lib/font-icon';
import IconButton from 'material-ui/lib/icon-button';
import IconMenu from 'material-ui/lib/menus/icon-menu';

const Colors = {
  darkBlack: '#000'
}

class CommentsList extends Component {

  render() {

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
        <MenuItem primaryText="Hide" />
        <MenuItem primaryText="Delete" />
      </IconMenu>
    );

    return (
      <div>

        <FontIcon className="muidocs-icon-action-home" /> 
        <List>
          <ListItem
            leftAvatar={<Avatar>A</Avatar>}
            rightIconButton={rightIconMenu}
            primaryText="Brendan Lim"
            secondaryText={
              <p>
                <span style={{color: Colors.darkBlack}}>Brunch this weekend?</span><br/>
                I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
              </p>
            }
            secondaryTextLines={2} />
          <ListDivider inset={true} />
          <ListItem
            leftAvatar={<Avatar>A</Avatar>}
            rightIconButton={rightIconMenu}
            primaryText="me, Scott, Jennifer"
            secondaryText={
              <p>
                <span style={{color: Colors.darkBlack}}>Summer BBQ</span><br/>
                Wish I could come, but I&apos;m out of town this weekend.
              </p>
            }
            secondaryTextLines={2} />
          <ListDivider inset={true} />
          <ListItem
            leftAvatar={<Avatar>A</Avatar>}
            rightIconButton={rightIconMenu}
            primaryText="Grace Ng"
            secondaryText={
              <p>
                <span style={{color: Colors.darkBlack}}>Oui oui</span><br/>
                Do you have any Paris recs? Have you ever been?
              </p>
            }
            secondaryTextLines={2} />
          <ListDivider inset={true} />
          <ListItem
            leftAvatar={<Avatar>A</Avatar>}
            rightIconButton={rightIconMenu}
            primaryText="Kerem Suer"
            secondaryText={
              <p>
                <span style={{color: Colors.darkBlack}}>Birthday gift</span><br/>
                Do you have any ideas what we can get Heidi for her birthday? How about a pony?
              </p>
            }
            secondaryTextLines={2} />
          <ListDivider inset={true} />
          <ListItem
            leftAvatar={<Avatar>A</Avatar>}
            rightIconButton={rightIconMenu}
            primaryText="Raquel Parrado"
            secondaryText={
              <p>
                <span style={{color: Colors.darkBlack}}>Recipe to try</span><br/>
                We should eat this: grated squash. Corn and tomatillo tacos.
              </p>
            }
            secondaryTextLines={2} />
        </List>



      </div>
    )
  }
}

export default CommentsList;