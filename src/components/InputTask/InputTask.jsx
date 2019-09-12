import React, { Component } from 'react';
import { connect } from 'react-redux';

class InputTask extends Component {

    state = {
        tasks: ''
    }

    handleInput = (event) => {
        this.setState({
            tasks: event.target.value
        })
    }

    addTask = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_TASK', payload: this.state});
    }

    render() {
        console.log('show state', this.state.tasks)
        return(
            <div>
                <input type='text' onChange={this.handleInput} value={this.state.tasks} placeholder="Add a Task" />
                <button onClick={this.addTask}>Submit</button>
            </div>
        )
    }
}

export default connect()(InputTask);