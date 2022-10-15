import React, { Component } from "react"

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
        this.setState({
            name: e.target.value,
        })
    }
    titleChange(e) {
        this.setState({
            title: e.target.value,
        })
    }
    emailChange(e) {
        this.setState({
            email: e.target.value,
        })
    }
    phoneChange(e) {
        this.setState({
            phone: e.target.value,
        })
    }
    locationChange(e) {
        this.setState({
            location: e.target.value,
        })
    }
    summaryChange(e) {
        this.setState({
            sunmmary: e.target.value,
        })
    }

    render() {
        return (
            <div>
                <form>
                    <label> Name:<input type="text" id="name" onChange={this.nameChange}></input></label>
                    <label> Title:<input type="text" id="title" onChange={this.titleChange}></input></label>
                    <label> email:<input type="text" id="email" onChange={this.emailChange}></input></label>
                    <label> Phone:<input type="text" id="phone" onChange={this.phoneChange}></input></label>
                    <label> Location:<input type="text" id="location" onChange={this.locationChange}></input></label>
                    <label> Summary:<input type="text" id="summary" onChange={this.summaryChange}></input></label>
                </form>
            </div>
        )
    }
}

export default GeneralInfo