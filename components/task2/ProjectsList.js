import React, {Component, PropTypes} from 'react';
import List from 'material-ui/lib/lists/list';
import ListDivider from 'material-ui/lib/lists/list-divider';
import ListItem from 'material-ui/lib/lists/list-item';
import Avatar from 'material-ui/lib/avatar';

import s from './../../styles/task2.js';
import rovioUrl from "./../../img/twitter_icon_rovio-300x300.png";
import ddUrl from "./../../img/DD-logo-wp.jpg";
import slushUrl from "./../../img/slush_logo.png";

class ProjectsList extends Component {
  render() {
    return (
      <div style={s.projectsList}>
        <List subheader="Suggested projects">
          <ListItem 
            style={s.projectItem}
            leftAvatar={<Avatar src={rovioUrl} />}
            primaryText="Rovio" 
            secondaryText={
              <p>
                <span style={s.messageCounter}>1.2k messages</span><br/>
                <span style={s.managersCounter}>2 managers online</span>
              </p>
            }
            secondaryTextLines={2} />

          <ListItem 
            leftAvatar={<Avatar src={ddUrl} />}
            primaryText="DealDash" 
            secondaryText={
              <p>
                <span style={s.messageCounter}>278 messages</span><br/>
                <span style={s.noManagersOnline}>We need you here!</span>
              </p>
            }
            secondaryTextLines={2} />
        </List>
        <ListDivider />
        <List subheader="Other projects">
          <ListItem 
            leftAvatar={<Avatar src={slushUrl} />}
            primaryText="Slush" 
            secondaryText={
              <p>No new messages</p>
            }
            secondaryTextLines={2} />
        </List>
      </div>
    )
  }
}

export default ProjectsList;