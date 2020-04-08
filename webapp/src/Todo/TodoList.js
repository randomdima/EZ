import React from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'


function TodoList(prop) {
    return (
        <ul>
            {prop.todos.map((todo, index) => {
                return <TodoItem todo={todo}
                    key={todo.id}
                    index={index}
                    onChange={prop.onToggle} />
            })}
        </ul>
    )
}
TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired
}

export default TodoList