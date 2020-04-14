import React from 'react'
import PropTypes from 'prop-types'
import './TodoItem.css'

function TodoItem({ todo, index, removeTodo }) {
    return (
        <li>
            <span>
                {index + 1}
            </span>
            <span>
                {todo.title}
            </span>
            <button onClick={() => removeTodo(todo.id)}>&times;</button>
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    removeTodo: PropTypes.func.isRequired
}

export default TodoItem
