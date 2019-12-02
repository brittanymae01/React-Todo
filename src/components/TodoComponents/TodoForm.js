import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newTodo: ''
        }
    }

    render() {
        return (
            <form>
                <input type='text' />
                <button>Add Todo</button>
                <button>Clear Completed</button>
            </form>

        )
    }
}

export default TodoForm