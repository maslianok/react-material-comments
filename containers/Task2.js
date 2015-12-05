import React, {Component, PropTypes} from 'react';
import Paper from 'material-ui/lib/paper';

import ProjectsList from './../components/task2/ProjectsList.js';
import CommentsList from './../components/task2/CommentsList.js';

import s from './../styles/task2.js';

class Task2 extends Component {
  render() {
    return (
      <Paper zDepth={2} style={s.container}>
        <ProjectsList />
        <CommentsList />
      </Paper>
    )
  }
}

export default Task2;