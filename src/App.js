import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: []
    }
  }

  clearCompleted = () => {
    const filteredItems = this.state.todoList.filter(item => {
      return item.completed === false
    })
    this.setState({
      todoList: filteredItems,
    })
  }


  completedTask = id => {
    this.setState({
      todoList: this.state.todoList.map(task => {
        if (task.id === id) {
          return ({
            ...task, completed: !task.completed
          });
        }
        else {
          return task;
        }
      })
    });
  }


  addTodo = newTodoText => {
    const newTodo = {
      task: newTodoText,
      id: Date.now(),
      completed: false
    }

    this.setState({
      todoList: [...this.state.todoList, newTodo]
    })
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className='App'>
        <h2>Todo List</h2>
        <TodoForm addTodo={this.addTodo} />
        <TodoList todoList={this.state.todoList} completedTask={this.completedTask} clearCompleted={this.clearCompleted} />

      </div>
    );
  }
}

export default App;
