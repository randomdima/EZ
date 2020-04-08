import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Context from '../context'

function TodoItem({ todo, index, onChange }) {
    const { removeTodo } = useContext(Context)
    const classes = []

    if (todo.completed) {
        classes.push('done')
    }
    return (
        <li>
            <span className={classes.join(' ')}>
                <input type="checkbox"
                    className="check"
                    checked={todo.completed}
                    onChange={() => onChange(todo.id)}>
                </input>
                {index + 1}&nbsp;{todo.title}
            </span>
            <button onClick={() => removeTodo(todo.id)}>&times;</button>
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}

export default TodoItem
