import React from 'react'
import Info from './Info'
import Message from './Message'
import Success from './Success'

class UserForm extends React.Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    content: ""
  }

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  }

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  }

  handleChange = input => event => {
    this.setState({[input]: event.target.value });
  }

  render(){
    const { step } = this.state;
    const { firstName, lastName, email, content } = this.state;
    const values = { firstName, lastName, email, content }

    switch(step){
      case 1:
        return (
          <Info
            nextStep = {this.nextStep}
            handleChange = {this.handleChange}
            values = {values}
          />
        )
      case 2:
        return (
          <Message
            nextStep = {this.nextStep}
            prevStep = {this.prevStep}
            handleChange = {this.handleChange}
            values = {values}
          />
        )
      case 3:
       return <Success/>
    }
  }
}

export default UserForm
