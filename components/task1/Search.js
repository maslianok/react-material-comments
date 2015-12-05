import React, {Component, PropTypes} from 'react';
import TextField from 'material-ui/lib/text-field';
import DatePicker from 'material-ui/lib/date-picker/date-picker';
import DatePickerDialog from 'material-ui/lib/date-picker/date-picker-dialog';

import s from './../../styles/task1.js';

class Search extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      search: null,
      dateFrom: undefined,
      dateTo: undefined
    };
  }

  render() {

    if (!this.props.showSearchBlock) {
      return null;
    }

    return (
      <div style={s.search__wrapper}>
        <TextField 
          onKeyUp={this._onSearch.bind(this)}
          defaultValue={this.state.search}
          style={s.search__item} 
          floatingLabelText="Search" />
        <DatePicker 
          onChange={this._onChangeDate.bind(this, 'dateFrom')}
          defaultDate={this.state.dateFrom}
          className="datepicker" 
          style={s.search__item} 
          floatingLabelText="Date from" 
          autoOk={true} />
        <DatePicker 
          onChange={this._onChangeDate.bind(this, 'dateTo')}
          defaultDate={this.state.dateTo}
          className="datepicker" 
          style={s.search__item} 
          floatingLabelText="Date to" 
          autoOk={true} />
      </div>
    )
  }

  _onSearch(event) {
    this.setState({
      search: event.target.value
    });

    this.props.onSearch(event.target.value);
  }

  _onChangeDate(type, event, date) {
    this.setState({
      [type]: date
    });

    this.props.onChangeDate(type, date);
  }
}

export default Search;