import React, { Component } from 'react'
import GeneralInfo from './components/GeneralInfo'
import EducationInfo from './components/EducationInfo'
import ExperienceInfo from './components/ExperienceInfo'

class App extends Component {
  render() {
    return (
      <div>
        <GeneralInfo />
        <EducationInfo />
        <ExperienceInfo />
      </div>
    );
  }
}

export default App;
