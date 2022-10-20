import React, { Component } from 'react'

class EducationInfo extends Component {
    render() {
        const { keyy, course, uni, eduStart, eduEnd, eduDesc, eduDel, eduAdd } = this.props;
        return (
            <div id='education-info' className={keyy} key={keyy}>
                <form id='education-info-form'>
                    Education
                    <label><input type="text" onChange={(e) => course(e, keyy)} placeholder="Course"></input></label>
                    <label><input type="text" onChange={(e) => uni(e, keyy)} placeholder="University"></input></label>
                    <label><input type="text" onChange={(e) => eduStart(e, keyy)} placeholder="Start Date"></input></label>
                    <label><input type="text" onChange={(e) => eduEnd(e, keyy)} placeholder="End Date"></input></label>
                    <label><input type="text" onChange={(e) => eduDesc(e, keyy)} placeholder="Description"></input></label>
                </form>
                <div className="btn-group">
                    <input type='button' value='Delete' onClick={(e) => eduDel(keyy)}></input>
                    <input type='button' value='Add' onClick={(e) => eduAdd(keyy)}></input>
                </div>
            </div>
        )
    }
}

export default EducationInfo