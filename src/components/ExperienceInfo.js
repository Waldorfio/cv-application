import React, { Component } from 'react'

class ExperienceInfo extends Component {
    render() {
        const { company, expPos, expStart, expEnd, expDesc, expDel, expAdd } = this.props;
        return (
            <div id='experience-info'>
                <form id='experience-info-form'>
                    Work Experience
                    <label><input type="text" onChange={company} placeholder="Company"></input></label>
                    <label><input type="text" onChange={expPos} placeholder="Position"></input></label>
                    <label><input type="text" onChange={expStart} placeholder="Start Date"></input></label>
                    <label><input type="text" onChange={expEnd} placeholder="End Date"></input></label>
                    <label><input type="text" onChange={expDesc} placeholder="Description"></input></label>
                </form>
                <div className="btn-group">
                    <input type='button' value='Delete' onClick={expDel}></input>
                    <input type='button' value='Add' onClick={expAdd}></input>
                </div>
            </div>
        )
    }
}

export default ExperienceInfo