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
    super(props);
    
    this.state = {
      showSearchBlock: false,
      activeFilter: 'All',
      searchText: null,
      dateFrom: null,
      dateTo: null
    };

    this._onFilter = this._onFilter.bind(this);
    this._onToggleSearchBlock = this._onToggleSearchBlock.bind(this);
    this._filterComments = this._filterComments.bind(this);
    this._onSearch = this._onSearch.bind(this);
    this._onChangeDate = this._onChangeDate.bind(this);
  }

  componentDidMount() {
    this.props.actions.requestCommentsData();
  }

  render() {
    const {actions} = this.props;
    return (
      <Paper zDepth={2} style={s.container}>

        <Filters 
          onFilter={this._onFilter} 
          onToggleSearchBlock={this._onToggleSearchBlock} 
          searchBtnActive={this.state.showSearchBlock}
          activeFilter={this.state.activeFilter} />

        <Search 
          showSearchBlock={this.state.showSearchBlock} 
          onChangeDate={this._onChangeDate} 
          onSearch={this._onSearch} />

        <CommentsList 
          comments={this._filterComments(this.props.comments)} 
          deleteAction={actions.deleteComment} 
          hideAction={actions.hideComment} />

      </Paper>
    )
  }

  _onFilter(type) {
    this.setState({
      activeFilter: type
    });
  }

  _onToggleSearchBlock() {
    this.setState({
      showSearchBlock: !this.state.showSearchBlock
    });
  }

  _onSearch(text) {
    this.setState({
      searchText: text
    });
  }

  _onChangeDate(type, date) {
    this.setState({
      [type]: date
    });
  }

  _filterComments(comments) {
    return comments.filter((comment) => {
      let isVisible = true;
      switch (this.state.activeFilter) {
        case 'Visible':
          isVisible = !comment.is_hidden;
          break;
        case 'Hidden':
          isVisible = comment.is_hidden;
          break;
        case 'Deleted':
          isVisible = comment.is_deleted;
          break;
      }

      if (this.state.searchText && 
        comment.message.indexOf(this.state.searchText) == -1 && 
        comment.from.name.indexOf(this.state.searchText) == -1) {
        isVisible = false;
      }

      const createdDate = new Date(comment.created_time);
      if (this.state.dateFrom && createdDate < this.state.dateFrom || 
        this.state.dateTo && createdDate > this.state.dateTo) {
        isVisible = false;
      }

      return isVisible;

    });
  }
}

Task1.propTypes = {
  actions: PropTypes.object.isRequired,
  comments: PropTypes.array
}

function mapStateToProps(state) {
  return {
    comments: state.comments.items
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
