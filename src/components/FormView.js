import React, { Component } from 'react'

class FormView extends Component {
  render() {
    const output = this.props.output; // Simplify props statements
    return (
      <div id="view-container">

        <div id="title-view">
            <h1 id="title">{output.fullName}</h1>
            <p id="general-title">{output.title}</p>
            <p id="general-summary" className="small-text">{output.summary}</p>
            <div id="contact-container">
                <p id="general-number">
                    <span className="material-symbols-outlined">call</span>
                    {output.phone}
                </p>
                <p id="general-email">
                    <span className="material-symbols-outlined">mail</span>
                    {output.email}
                </p>
                <p id="general-loc">
                    <span className="material-symbols-outlined">pin_drop</span>
                    {output.location}
                </p>
            </div>
          </div>

        <div id="experience-view">
          <h3>{output.expComp}</h3>
          <h4>Software Engineer</h4>
          <span className="small-text"><i>A Company | </i><b>2018 - Present</b></span>
          <p className="small-text">
              - Sed ut perspiciatis unde omnis iste natus error sit.<br></br>
              - Voluptatem accusantium doloremque laudantium, totam.<br></br>
              - Rem aperiam, eaque ipsa quae ab illo inventore veritatis. 
          </p>
        </div>

        <div id="experience-view">
          <h3>{output.expComp}</h3>
          <h4>Software Engineer</h4>
          <span className="small-text"><i>A Company | </i><b>2018 - Present</b></span>
          <p className="small-text">
              - Sed ut perspiciatis unde omnis iste natus error sit.<br></br>
              - Voluptatem accusantium doloremque laudantium, totam.<br></br>
              - Rem aperiam, eaque ipsa quae ab illo inventore veritatis. 
          </p>
        </div>

        <div id="education-view">
          <h3>EDUCATION</h3>
          <h4>Fullstack JavaScript</h4>
          <span className="small-text"><i>UWA | </i><b>2018 - Present</b></span>
        </div>

      </div>
      );
    }
  }

export default FormView;
