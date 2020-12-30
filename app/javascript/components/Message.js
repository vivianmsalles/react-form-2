import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


export class Message extends Component {
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
          <AppBar title="Enter Your Message"/>
          <TextField
            hintText="Enter your content"
            floatingLabelText="Message Content"
            onChange = {handleChange('content')}
            defaultValue = {values.content}
          />
          <br/>
          <RaisedButton
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
          <RaisedButton
            label="Back"
            primary={false}
            style={styles.button}
            onClick={this.back}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
}

export default Message
