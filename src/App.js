import React, { Component } from 'react'
import FormInput from './components/FormInput'
import FormView from './components/FormView'

class App extends Component {
  render() {
    return (
      <div id='container'>
        <FormInput />
        <FormView />
      </div>
    );
  }
}

export default App;
