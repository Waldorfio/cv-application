import React, { Component } from 'react'

class Form extends Component {
    render() {
        const { name, title, email, phone, location, summary } = this.props.general;
        return (
            <div id='form'>
                Name: {name}
                Title: {title}
                email: {email}
                phone: {phone}
                location: {location}
                summary: {summary}
            </div>
        )
    }
}

export default Form