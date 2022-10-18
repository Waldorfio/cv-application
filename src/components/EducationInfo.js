import React, { Component } from 'react'

class EducationInfo extends Component {
    render() {
        const { course, uni, eduStart, eduEnd, eduDesc, eduDel, eduAdd } = this.props;
        return (
            <div id='education-info'>
                <form id='education-info-form'>
                    Education
                    <label><input type="text" onChange={course} placeholder="Course"></input></label>
                    <label><input type="text" onChange={uni} placeholder="University"></input></label>
                    <label><input type="text" onChange={eduStart} placeholder="Start Date"></input></label>
                    <label><input type="text" onChange={eduEnd} placeholder="End Date"></input></label>
                    <label><input type="text" onChange={eduDesc} placeholder="Description"></input></label>
                </form>
                <div class="btn-group">
                    <input type='button' value='Delete' onClick={eduDel}></input>
                    <input type='button' value='Add' onClick={eduAdd}></input>
                </div>
            </div>
        )
    }
}

export default EducationInfo