import React, { Component } from 'react'
import Form from './Form'

class GeneralInfo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            title: '',
            email: '',
            phone: '',
            location: '',
            summary: '',
        }

        this.nameChange = this.nameChange.bind(this);
        this.titleChange = this.titleChange.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.phoneChange = this.phoneChange.bind(this);
        this.locationChange = this.locationChange.bind(this);
        this.summaryChange = this.summaryChange.bind(this);
    }

    nameChange(e) {
        e.preventDefault();
        this.setState({
            name: e.target.value,
        })
    }
    titleChange(e) {
        e.preventDefault();
        this.setState({
            title: e.target.value,
        })
    }
    emailChange(e) {
        e.preventDefault();
        this.setState({
            email: e.target.value,
        })
    }
    phoneChange(e) {
        e.preventDefault();
        this.setState({
            phone: e.target.value,
        })
    }
    locationChange(e) {
        e.preventDefault();
        this.setState({
            location: e.target.value,
        })
    }
    summaryChange(e) {
        e.preventDefault();
        this.setState({
            summary: e.target.value,
        })
    }

    render() {
        return (
            <div id='general-info'>
                <form id='general-info-form'>
                    Personal Details
                    <label><input type="text" onChange={this.nameChange} placeholder="Name"></input></label>
                    <label><input type="text" onChange={this.titleChange} placeholder="Job Title"></input></label>
                    <label><input type="text" onChange={this.emailChange} placeholder="Email"></input></label>
                    <label><input type="text" onChange={this.phoneChange} placeholder="Phone"></input></label>
                    <label><input type="text" onChange={this.locationChange} placeholder="Location"></input></label>
                    <label><input type="text" onChange={this.summaryChange} placeholder="Summary"></input></label>
                </form>
            </div>
        )
    }
}

export default GeneralInfo