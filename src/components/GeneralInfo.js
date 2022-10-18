import React, { Component } from 'react'

class GeneralInfo extends Component {
    render() {
        const { fullName, title, email, phone, loc, summary } = this.props;
        return (
            <div id='general-info'>
                <form id='general-info-form'>
                    Personal Details
                    <label><input type="text" onChange={fullName} placeholder="Name"></input></label>
                    <label><input type="text" onChange={title} placeholder="Job Title"></input></label>
                    <label><input type="text" onChange={email} placeholder="Email"></input></label>
                    <label><input type="text" onChange={phone} placeholder="Phone"></input></label>
                    <label><input type="text" onChange={loc} placeholder="Location"></input></label>
                    <label><input type="text" onChange={summary} placeholder="Summary"></input></label>
                </form>
            </div>
        )
    }
}

export default GeneralInfo