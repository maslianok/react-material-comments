import React, {Component, PropTypes} from 'react';
import Paper from 'material-ui/lib/paper';

import Filters from './../components/task1/Filters.js';
import Search from './../components/task1/Search.js';
import CommentsList from './../components/task1/CommentsList.js';

import s from './../styles/task1.js';

class Task1 extends Component {

  render() {
    return (
      <Paper zDepth={2} style={s.container}>

        <Filters />

        <Search />

        <CommentsList />

      </Paper>
    )
  }
}

export default Task1;