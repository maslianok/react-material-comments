import React, {Component, PropTypes} from 'react';
import Avatar from 'material-ui/lib/avatar';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';
import FlatButton from 'material-ui/lib/flat-button';

import s from './../../styles/task2.js';

class CommentItem extends Component {
  render() {
    const {comment} = this.props;

    const iconPositive = (
      <span style={s.iconPositive}>
        <svg fill="#01BCD4" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
        </svg>
      </span>
    );

    const iconNegative = (
      <span style={s.iconNegative}>
        <svg fill="#FF4886" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0h24v24H0V0z" fill="none"/>
          <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 3c-2.33 0-4.31 1.46-5.11 3.5h10.22c-.8-2.04-2.78-3.5-5.11-3.5z"/>
      </svg>
      </span>
    );

    return (
      <Card style={s.commentWrapper}>
        <CardHeader
          style={s.commentHeader}
          title={comment.from.name}
          subtitle={comment.message}
          avatar={<Avatar>{comment.from.name[0]}</Avatar>}
          actAsExpander={true}>
        </CardHeader>
        <CardText expandable={true}>
          <p>Like count: {comment.like_count}</p>
          <p>Link: <a target="_blank" href={comment.link}>{comment.link}</a></p>
          <p>Created time ago: {comment.created_time_ago}</p>
          <p>Created time: {comment.created_time_show}</p>
        </CardText>
        <CardActions style={s.commentActions}>
          <FlatButton 
            labelPosition="after" 
            labelStyle={s.commentEmotionBtn}
            secondary={true} 
            label="Positive">
            {iconPositive}
          </FlatButton>
          <FlatButton 
            labelPosition="after" 
            labelStyle={s.commentEmotionBtn}
            primary={true}
            label="Negative">
            {iconNegative}
          </FlatButton>

          <FlatButton label="Delete"/>
          <FlatButton label="Postpone" labelStyle={s.postponeBtn}/>
        </CardActions>
      </Card>
    )
  }
}

export default CommentItem;