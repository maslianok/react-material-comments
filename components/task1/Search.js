import React, {Component, PropTypes} from 'react';
import TextField from 'material-ui/lib/text-field';
import DatePicker from 'material-ui/lib/date-picker/date-picker';
import DatePickerDialog from 'material-ui/lib/date-picker/date-picker-dialog';

import s from './../../styles/task1.js';

class Search extends Component {

  render() {

    if (!this.props.showSearchBlock) {
      return null;
    }

    return (
      <div style={s.search__wrapper}>
        <TextField style={s.search__item} floatingLabelText="Search" />
        <DatePicker className="datepicker" style={s.search__item} floatingLabelText="Date from" autoOk={true} />
        <DatePicker className="datepicker" style={s.search__item} floatingLabelText="Date to" autoOk={true} />
      </div>
    )
  }
}

export default Search;