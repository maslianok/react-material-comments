import React, {Component, PropTypes} from 'react';
import List from 'material-ui/lib/lists/list';
import ListDivider from 'material-ui/lib/lists/list-divider';

import CommentItem from './CommentItem';

import url from "./../../img/twitter_icon_rovio-300x300.png";

import s from './../../styles/task2.js';

import {items} from './../../data.js';
const comments = items.slice().splice(0, 5);

class ProjectsList extends Component {
  render() {
    return (
      <div style={s.commentsList}>
        {comments.reduce((result, comment) => {
          result.push(<CommentItem key={comment.id} comment={comment}/>);
          result.push(<ListDivider style={{marginLeft: 0}} key={comment.id + 'divider'} inset={true} />);
          return result;
        }, [])}
      </div>
    )
  }
}

export default ProjectsList;