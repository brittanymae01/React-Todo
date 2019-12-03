import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newTodo: ''
        }
    }

    handleChanges = event => {
        this.setState({ newTodo: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.addTodo(this.state.newTodo);
        this.setState({
            newTodo: ''
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' name='todo' onChange={this.handleChanges} value={this.state.newTodo} />
                <button>Add Todo</button>
            </form>

        )
    }
}

export default TodoForm