import React, { Component } from 'react'

class FormEdu extends Component {
  render() {
     // Simplify props statements
    const output = this.props.output;
    const key = this.props.keyy;
    return (
        <div id="education-view">
          <h3>EDUCATION</h3>
          <h4>{output.course[key]}</h4>
          <span className="small-text"><i>{output.uni[key]} | </i><b>{output.eduStart[key]} - {output.eduEnd[key]}</b></span>
          <p className="small-text">
            {output.eduDesc[key]}
          </p>
        </div>
      );
    }
  }

export default FormEdu;
