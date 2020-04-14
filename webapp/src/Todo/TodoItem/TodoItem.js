import React from 'react'
import PropTypes from 'prop-types'
import './TodoItem.css'

function TodoItem({ todo, index, removeTodo }) {
    return (
        <div className="todoItem">
            <div className="todoTitle">
                <span>
                    {index + 1}
                </span>
                <span>
                    {todo.title}
                </span>
                <button
                    className="todoPropButton"
                    onClick={() => document.getElementById(todo.id).classList.toggle('collapsed')}>
                    See more...
                    </button>
                <button onClick={() => removeTodo(todo.id)}>&times;</button>
            </div>
            <div className="hidenProps collapsed" id={todo.id}>

                <div className="todoProps">
                    User: {todo.user.login}
                </div>
                <div className="todoProps">
                    Label: {todo.labels.map(q => q.name)}
                </div>
                <div className="todoProps">
                    State: {todo.state}
                </div>

            </div>
        </div>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    removeTodo: PropTypes.func.isRequired
}

export default TodoItem
