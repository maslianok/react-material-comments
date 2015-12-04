import React, {Component, PropTypes} from 'react';

import FlatButton from 'material-ui/lib/flat-button';

import s from './../../styles/task1.js';

class Filters extends Component {

  render() {
    return (


      <div style={s.filter__wrapper}>

      	<FlatButton label="Default" />
      	<FlatButton label="Visible" />
      	<FlatButton label="Hidden" />
      	<FlatButton label="Deleted" />
      	<FlatButton label="Serach tools" style={{float: 'right'}} />

      </div>
    )
  }
}

export default Filters;