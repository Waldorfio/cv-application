import React, { Component } from 'react'

class ExperienceInfo extends Component {
    render() {
        const { keyy, company, expPos, expStart, expEnd, expDesc, expDel, expAdd } = this.props;
        return (
            <div id='experience-info' className={keyy} key={keyy}>
                <form id='experience-info-form'>
                    Work Experience
                    <label><input type="text" onChange={(e) => company(e, keyy)} placeholder="Company"></input></label>
                    <label><input type="text" onChange={(e) => expPos(e, keyy)} placeholder="Position"></input></label>
                    <label><input type="text" onChange={(e) => expStart(e, keyy)} placeholder="Start Date"></input></label>
                    <label><input type="text" onChange={(e) => expEnd(e, keyy)} placeholder="End Date"></input></label>
                    <label><input type="text" onChange={(e) => expDesc(e, keyy)} placeholder="Description"></input></label>
                </form>
                <div className="btn-group">
                    <input type='button' value='Delete' onClick={(e) => expDel(keyy)}></input>
                    <input type='button' value='Add' onClick={(e) => expAdd(keyy)}></input>
                </div>
            </div>
        )
    }
}

export default ExperienceInfo