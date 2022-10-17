import React, { Component } from 'react'
import Form from './Form'

class EducationInfo extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        return (
            <div id='education-info'>
                <form id='education-info-form'>
                    Education
                    <label><input type="text" onChange={this.nameChange} placeholder="Course"></input></label>
                    <label><input type="text" onChange={this.titleChange} placeholder="University"></input></label>
                    <label><input type="text" onChange={this.emailChange} placeholder="Start Date"></input></label>
                    <label><input type="text" onChange={this.phoneChange} placeholder="End Date"></input></label>
                    <label><input type="text" onChange={this.locationChange} placeholder="Description"></input></label>
                </form>
                <div class="btn-group">
                    <input type='button' value='Delete' onClick={this.delExp}></input>
                    <input type='button' value='Add' onClick={this.addExp}></input>
                </div>
            </div>
        )
    }
}

export default EducationInfo