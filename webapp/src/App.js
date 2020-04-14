import React, { useState } from 'react';
import TodoList from './Todo/TodoList/TodoList';
import AddTodo from './Todo/AddTodo/AddTodo';

function App() {
  const [todos, setTodos] = useState([]);

  useState(() => {
    fetch('https://api.github.com/repos/randomdima/ez/issues?state=all')
      .then(response => response.json())
      .then(setTodos);
  })
  console.log(todos)



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
