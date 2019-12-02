// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

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
            </form>

        )
    }
}

export default TodoForm