import React from 'react'
import TodoItem from '../TodoItem/TodoItem'
import PropTypes from 'prop-types'
import './TodoList.css'

function TodoList({ todos, removeTodo }) {
    return (
        <ul>
            {todos.map((todo, index) => <TodoItem
                todo={todo}
                key={todo.id}
                index={index}
                removeTodo={removeTodo} />)}
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    removeTodo: PropTypes.func.isRequired
}

export default TodoList