import React, { Component } from 'react'
import Form from './Form'
import AddExp from './AddExp'

class ExperienceInfo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            exp: {
                company: '',
                position: '',
                start: '',
                end: '',
                desc: '',
            },
            companyArr: [],
            positionArr: [],
            startArr: [],
            endArr: [],
            descArr: [],
        }
    }

    handleCompany(e) {
        e.preventDefault();
        this.setState({
            exp: {
                company: e.target.value,
            }
        })
    }

    delExp(e) {
        alert('Deleting experience!');
    }
    addExp(e) {
        alert('Adding experience!');
    }

    render() {
        return (
            <div id='experience-info'>
                <form id='experience-info-form'>
                    Work Experience
                    <label><input type="text" onChange={this.nameChange} placeholder="Company"></input></label>
                    <label><input type="text" onChange={this.titleChange} placeholder="Position"></input></label>
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

export default ExperienceInfo