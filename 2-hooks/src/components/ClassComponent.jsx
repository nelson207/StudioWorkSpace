import React, { Component } from 'react'

class ClassComponent extends Component {

    state = {
        name: '',
    }

    handleNameChange = (evt) => {
        this.setState({ name: evt.target.value })
    }


    render() {

        const { name } = this.state;

        return (
            <div>
                <h1>Class</h1>
                <h2>My Name is: {name}</h2>
                <input type='text' value={name} onChange={this.handleNameChange} />
            </div>
        )
    }
}

export default ClassComponent;