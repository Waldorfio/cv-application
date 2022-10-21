import React, { Component } from 'react'

class FormExp extends Component {
  render() {
     // Simplify props statements
    const output = this.props.output;
    const key = this.props.keyy;
    return (
        <div id="experience-view">
          <h3>{output.expComp[key]}</h3>
          <h4>Software Engineer</h4>
          <span className="small-text"><i>A Company | </i><b>2018 - Present</b></span>
          <p className="small-text">
              - Sed ut perspiciatis unde omnis iste natus error sit.<br></br>
              - Voluptatem accusantium doloremque laudantium, totam.<br></br>
              - Rem aperiam, eaque ipsa quae ab illo inventore veritatis. 
          </p>
        </div>
      );
    }
  }

export default FormExp;
