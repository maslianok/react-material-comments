import React, {Component, PropTypes} from 'react';

import FlatButton from 'material-ui/lib/flat-button';

import s from './../../styles/task1.js';

const filters = ['All', 'Visible', 'Hidden', 'Deleted'];

class Filters extends Component {

  render() {
    const {onToggleSearchBlock, onFilter, searchBtnActive, activeFilter} = this.props;

    let searchBtnStyles = s.filter__search;
    if (searchBtnActive) {
      searchBtnStyles = Object.assign({}, searchBtnStyles, s.filter__active);
    }

    return (
      <div style={s.filter__wrapper}>
        {filters.map((e, i) => {
          let filterStyles = {};
          if (e == 'All') filterStyles = s.filter__allBtn;
          if (e == activeFilter) filterStyles = Object.assign(filterStyles, s.filter__active);
          return <FlatButton key={i} label={e} onTouchTap={() => onFilter(e)} style={filterStyles} />
        })}
      	<FlatButton label="Search tools" style={searchBtnStyles} onTouchTap={onToggleSearchBlock} />
      </div>
    )
  }
}

export default Filters;