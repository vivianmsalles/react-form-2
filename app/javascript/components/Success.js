import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


export class Success extends Component {
  continue = event => {
    event.preventDefault();
    this.props.nextStep();
  }

  back = event => {
    event.preventDefault();
    this.props.prevStep();
  }

  // PROCESS FORM --> BACK END

  render () {
    const { values, handleChange } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Thanks!"/>
          <h1>
          Thank you for your feedback! <br/>
          Our team will get back to you soon
          </h1>

        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}


export default Success
