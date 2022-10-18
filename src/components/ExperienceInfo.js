import React, { Component } from 'react'

class ExperienceInfo extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { company, expPos, expStart, expEnd, expDesc, expDel, expAdd } = this.props;
        return (
            <div id='experience-info'>
                <form id='experience-info-form'>
                    Work Experience
                    <label><input type="text" onChange={company(e)} placeholder="Company"></input></label>
                    <label><input type="text" onChange={expPos(e)} placeholder="Position"></input></label>
                    <label><input type="text" onChange={expStart(e)} placeholder="Start Date"></input></label>
                    <label><input type="text" onChange={expEnd(e)} placeholder="End Date"></input></label>
                    <label><input type="text" onChange={expDesc(e)} placeholder="Description"></input></label>
                </form>
                <div class="btn-group">
                    <input type='button' value='Delete' onClick={expDel}></input>
                    <input type='button' value='Add' onClick={expAdd}></input>
                </div>
            </div>
        )
    }
}

export default ExperienceInfo