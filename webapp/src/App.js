import React, { useState } from 'react';
import TodoList from './Todo/TodoList/TodoList';
import AddTodo from './Todo/AddTodo/AddTodo';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      completed: false,
      title: 'if no github todos',
      url: 'https://api.github.com/repos/randomdima/ez/issues/25'
    }, 
    {
      id: 2,
      completed: false,
      title: 'if no github todos',
      url: 'https://api.github.com/repos/randomdima/ez/issues/24'
    }, {
      id: 3,
      completed: false,
      title: 'if no github todos',
      url: 'https://api.github.com/repos/randomdima/ez/issues/23'
    }, {
      id: 4,
      completed: false,
      title: 'if no github todos',
      url: 'https://api.github.com/repos/randomdima/ez/issues/22'
    }
  ]);

  useState(() => {
    fetch('https://api.github.com/repos/randomdima/ez/issues')
      .then(response => response.json())
      .then(setTodos);
  })



  function addTodo(title) {
    setTodos(todos.concat({
      title,
      id: Date.now(),
      completed: false
    }));
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div>
      <div className="header">
        <b> EZ all issues </b>
      </div>
      <AddTodo onCreate={addTodo} />
      {todos.length ? <TodoList removeTodo={removeTodo} todos={todos}></TodoList> :
        <p>No todos</p>}
    </div>
  )
}

export default App;
