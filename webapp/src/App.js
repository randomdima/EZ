import React from 'react';
import TodoList from './Todo/TodoList/TodoList';
import AddTodo from './Todo/AddTodo/AddTodo';
import SearchBar from './AddTodoProp/SearchBar'


const TODOS = [{
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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: TODOS,
      filterText: '',
      stateOpen: false
    }
    this.removeTodo = this.removeTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  componentDidMount() {
    fetch('https://api.github.com/repos/randomdima/ez/issues')
      .then(response => response.json())
      .then(result => this.setState({
        todos: result
      }))
  }


  addTodo(title) {
    this.setState({
      todos: [...this.state.todos, { title: title, id: Date.now(), state: 'qwe' }]
    })
  }

  removeTodo(id) {
    const todos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({ todos })
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }


  render() {
    return (
      <div>

        <div className='navBar'>
          <div className='leftBar'>
            <SearchBar
              filterText={this.state.filterText}
              stateOpen={this.state.stateOpen}
              onFilterTextChange={this.handleFilterTextChange}
              onStateOpen={this.handleStateOpen} />
          </div>
        </div>

        <div className="header">
          <b> EZ all issues </b>
        </div>

        <div className='mainBar'>
          <div className='centerBar'>
            <AddTodo onCreate={this.addTodo} />
            {this.state.todos.length ? <TodoList
              removeTodo={this.removeTodo}
              todos={this.state.todos}
              filterText={this.state.filterText}></TodoList> :
              <p>No todos</p>}
          </div>

        </div>
      </div >
    )
  }
}

export default App;
