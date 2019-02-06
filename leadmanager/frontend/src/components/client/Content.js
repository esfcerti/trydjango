import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TextField from '@material-ui/core/TextField';

class Client extends Component {

  render() {
    return (
      <Fragment>
        <p> Teste Datepick </p>
        
        <TextField
          id="date"
          label="Birthday"
          type="date"
          defaultValue="2017-05-24"                    
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Fragment>
    );
  }
}

// export default connect(
//   mapStateToProps,
//   { register, createMessage }
// )(Client);

export default Client;