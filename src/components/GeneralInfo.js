import React, { Component } from "react"

class GeneralInfo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            phone: '',
        }

        this.handleChange = this.nameChange.bind(this);
        this.handleChange = this.emailChange.bind(this);
        this.handleChange = this.phoneChange.bind(this);
    }

    nameChange(e) {
        this.setState({
            name: e.target.value,
        })
        alert('new name: '+this.state.name);
    }
    emailChange(e) {
        this.setState({
            email: e.target.value,
        })
        alert('new email: '+this.state.email);
    }
    phoneChange(e) {
        this.setState({
            phone: e.target.value,
        })
        alert('new phone: '+this.state.phone);
    }


    render() {
        return (
            <div>
                <form>
                    <label> Name:
                    <input type="text" id="name" onChange={this.nameChange}></input>
                    </label>
                    <label> email:
                    <input type="text" id="email" onChange={this.emailChange}></input>
                    </label>
                    <label> Phone:
                    <input type="text" id="phone" onChange={this.phoneChange}></input>
                    </label>
                </form>
            </div>
        )
    }
}

export default GeneralInfo