import React, { Component } from "react"

class GeneralInfo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            phone: '',
        }

        this.nameChange = this.nameChange.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.phoneChange = this.phoneChange.bind(this);
    }

    nameChange(e) {
        this.setState({
            name: e.target.value,
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