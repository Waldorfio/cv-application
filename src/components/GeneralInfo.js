import React, { Component } from 'react'

class GeneralInfo extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { fullName, title, email, phone, loc, summary } = this.props;
        return (
            <div id='general-info'>
                <form id='general-info-form'>
                    Personal Details
                    <label><input type="text" onChange={fullName(e)} placeholder="Name"></input></label>
                    <label><input type="text" onChange={title(e)} placeholder="Job Title"></input></label>
                    <label><input type="text" onChange={email(e)} placeholder="Email"></input></label>
                    <label><input type="text" onChange={phone(e)} placeholder="Phone"></input></label>
                    <label><input type="text" onChange={loc(e)} placeholder="Location"></input></label>
                    <label><input type="text" onChange={summary(e)} placeholder="Summary"></input></label>
                </form>
            </div>
        )
    }
}

export default GeneralInfo