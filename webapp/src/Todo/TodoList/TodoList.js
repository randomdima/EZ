import React from 'react'
import TodoItem from '../TodoItem/TodoItem'
import PropTypes from 'prop-types'

function TodoList({ todos, removeTodo, filterText }) {
    const todo = todos.filter(todo => filterText === "" ||
        todo.title.toLowerCase().includes(filterText.toLowerCase()))
        .map((todo, index) =>
            <TodoItem
                todo={todo}
                key={todo.id}
                index={index}
                removeTodo={removeTodo} />)
    return (
        <ul>
            {todo}
        </ul>
    )
}
TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    removeTodo: PropTypes.func.isRequired,
    filterText: PropTypes.string
}

export default TodoList