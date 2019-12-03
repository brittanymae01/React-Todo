import React from 'react'
import './Todo.css'

const Todo = props => {


    return (
        <div onClick={() => props.completedTask(props.todo.id)} className={`${props.todo.completed ? 'completed' : ''}`}>
            <p>{props.todo.task}</p>
        </div>
    )
}

export default Todo;