import React, { Component } from 'react'

class EducationInfo extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { course, uni, eduStart, eduEnd, eduDesc, eduDel, eduAdd } = this.props;
        return (
            <div id='education-info'>
                <form id='education-info-form'>
                    Education
                    <label><input type="text" onChange={course(e)} placeholder="Course"></input></label>
                    <label><input type="text" onChange={uni(e)} placeholder="University"></input></label>
                    <label><input type="text" onChange={eduStart(e)} placeholder="Start Date"></input></label>
                    <label><input type="text" onChange={eduEnd(e)} placeholder="End Date"></input></label>
                    <label><input type="text" onChange={eduDesc(e)} placeholder="Description"></input></label>
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