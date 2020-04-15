import React, { Suspense } from 'react'
import PropTypes from 'prop-types'
import './TodoItem.css'
// import AddProp from '../../AddTodoProp/AddProp.js'
const AddProp = React.lazy(() => import('../../AddTodoProp/AddProp.js'))

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
                <Suspense fallback={<div>Loading</div>}>
                    <AddProp todoItem={todo} />
                </Suspense>
            </div>

        </div >
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    removeTodo: PropTypes.func.isRequired
}

export default TodoItem
