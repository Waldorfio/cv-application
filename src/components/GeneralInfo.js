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
            <div>
                <form>
                    <label> Name:<input type="text" id="name" onChange={this.nameChange}></input></label>
                    <label> Title:<input type="text" id="title" onChange={this.titleChange}></input></label>
                    <label> Email:<input type="text" id="email" onChange={this.emailChange}></input></label>
                    <label> Phone:<input type="text" id="phone" onChange={this.phoneChange}></input></label>
                    <label> Location:<input type="text" id="location" onChange={this.locationChange}></input></label>
                    <label> Summary:<input type="text" id="summary" onChange={this.summaryChange}></input></label>
                </form>
                < Form general={this.state} />
            </div>
        )
    }
}

export default GeneralInfo