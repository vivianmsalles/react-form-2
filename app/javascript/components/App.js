import React from 'react'
import { Route, Switch } from 'react-router-dom'
import UserForm from './UserForm'
import About from './About'
import Contact from './Contact'

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={UserForm} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
    )
  }
}

export default App
