import React, { useState } from 'react';
import TodoList from './Todo/TodoList'
import Context from './context'
import AddTodo from './Todo/AddTodo';

function App() {
  const [todos, setTodos] = React.useState([  ])

  useState(() => {
    fetch('https://api.github.com/repos/randomdima/ez/issues')
      .then(response => response.json())
      .then(todos => {
        setTodos(todos)
      })
  }, [])

  function toggoleTodo(id) {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }))
  }
  function addTodo(title) {
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      completed: false
    }]))
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div>
        <div className="header">
          <b> Some ugly react </b>
        </div>
        <AddTodo onCreate={addTodo} />
        {todos.length ? <TodoList todos={todos} onToggle={toggoleTodo}></TodoList> :
          <p>No todos</p>}

      </div>
    </Context.Provider>
  )
}

export default App;
