import React, { Component } from 'react'

class FormGeneral extends Component {
  render() {
    // Simplify props statements
    const output = this.props.output;
    return (
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
      );
    }
  }

export default FormGeneral;
