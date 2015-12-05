import React, {Component, PropTypes} from 'react';
import List from 'material-ui/lib/lists/list';
import ListDivider from 'material-ui/lib/lists/list-divider';

import CommentItem from './CommentItem';

class CommentsList extends Component {
  render() {
    const {comments} = this.props;

    if (!comments.length) {
      //TODO add loader
      return null;
    }

    return (
      <List>
        {comments.reduce((result, comment) => {
          result.push(<CommentItem key={comment.id} comment={comment}/>);
          result.push(<ListDivider key={comment.id + 'divider'} inset={true} />);
          return result;
        }, [])}
      </List>
    )
  }
}

export default CommentsList;