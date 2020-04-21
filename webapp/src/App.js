import React from 'react';
import TodoList from './Todo/TodoList/TodoList';
import AddTodo from './Todo/AddTodo/AddTodo';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{
        id: 1,
        completed: false,
        title: 'if no github todos',
        url: 'https://api.github.com/repos/randomdima/ez/issues/25',
        state: 'open'
      },
      {
        id: 2,
        completed: false,
        title: 'if no github todos',
        url: 'https://api.github.com/repos/randomdima/ez/issues/24',
        state: 'open'
      }]
    }
    this.removeTodo = this.removeTodo.bind(this);
  }

  componentDidMount() {
    fetch('https://api.github.com/repos/randomdima/ez/issues')
      .then(response => response.json())
      .then(result => this.setState({
        todos: result
      }))
  }


  addTodo = (title) => {
    this.setState({
      todos: [...this.state.todos, { title: title, id: Date.now(), state: 'open' }]
    })
  }
  removeTodo(id) {
    const todos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({ todos })
  }

  render() {
    return (
      <div>
        <div className="header">
          <b> EZ all issues </b>
        </div>
        <AddTodo onCreate={this.addTodo} />
        {this.state.todos.length ? <TodoList removeTodo={this.removeTodo} todos={this.state.todos}></TodoList> :
          <p>No todos</p>
        }
      </div >
    )
  }
}

export default App;
