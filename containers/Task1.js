import React, {Component, PropTypes} from 'react';
import Paper from 'material-ui/lib/paper';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Filters from './../components/task1/Filters.js';
import Search from './../components/task1/Search.js';
import CommentsList from './../components/task1/CommentsList.js';
import * as actions from '../actions/index';

import s from './../styles/task1.js';

class Task1 extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
      showSearchBlock: false,
      activeFilter: 'All'
    };

    this._onFilter = this._onFilter.bind(this);
    this._onToggleSearchBlock = this._onToggleSearchBlock.bind(this);
  }

  componentDidMount() {
    this.props.actions.requestCommentsData();
  }

  render() {
    return (
      <Paper zDepth={2} style={s.container}>

        <Filters 
          onFilter={this._onFilter} 
          onToggleSearchBlock={this._onToggleSearchBlock} 
          searchBtnActive={this.state.showSearchBlock}
          activeFilter={this.state.activeFilter} />

        <Search showSearchBlock={this.state.showSearchBlock} />

        <CommentsList />

      </Paper>
    )
  }

  _onFilter(type) {

    console.log(type);

  }

  _onToggleSearchBlock() {
    this.setState({
      showSearchBlock: !this.state.showSearchBlock
    });
  }
}

Task1.propTypes = {
  actions: PropTypes.object.isRequired,
  comments: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    comments: state.comments
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Task1);
