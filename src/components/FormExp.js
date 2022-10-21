import React, { Component } from 'react'

class FormExp extends Component {
  render() {
     // Simplify props statements
    const output = this.props.output;
    const key = this.props.keyy;
    return (
        <div id="experience-view">
          <h3>WORK EXPERIENCE</h3>
          <h4>{output.expPos[key]}</h4>
          <span className="small-text"><i>{output.expComp[key]} | </i><b>{output.expStart[key]} - {output.expEnd[key]}</b></span>
          <p className="small-text">
            {output.expDesc[key]}
          </p>
        </div>
      );
    }
  }

export default FormExp;