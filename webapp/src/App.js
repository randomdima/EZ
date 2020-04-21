import React, { useState } from 'react';
import TodoList from './Todo/TodoList/TodoList';
import AddTodo from './Todo/AddTodo/AddTodo';

function App() {
  const [todos, setTodos] = useState([]);

  function fetchTodo(url, method, title = '') {
    fetch(url, {
      method: method,
      body: JSON.stringify({
        "title": title,
        "description": `description of ${title}`
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
  }

  useState(() => {
    fetch('http://localhost:5000/todos')
      .then(response => response.json())
      .then(setTodos);
  })

  function addTodo(title) {
    setTodos(todos.concat({
      title,
      description: `description  of ${title}`,
      id: Date.now() // set id prop before reload
    }));
    fetchTodo('http://localhost:5000/todos', "POST", title);
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
    fetchTodo(`http://localhost:5000/todos/${id}`, "DELETE");
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
