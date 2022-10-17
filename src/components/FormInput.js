import React, { Component } from 'react'
import GeneralInfo from './GeneralInfo'
import EducationInfo from './EducationInfo'
import ExperienceInfo from './ExperienceInfo'

class FormInput extends Component {
  render() {
    return (
      <div id='input-container'>
        <GeneralInfo />
        <ExperienceInfo />
        <EducationInfo />
      </div>
    );
  }
}

export default FormInput;
