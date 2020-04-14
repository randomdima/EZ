import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './AddTodo.css'

function AddTodo({ onCreate }) {
    const [value, setValue] = useState('')

    function submitTodo(event) {
        event.preventDefault()

        if (value.trim()) {
            onCreate(value)
            setValue('')
        }
    }
    return (
        <form onSubmit={submitTodo}>
            <input value={value} onChange={event => setValue(event.target.value)} placeholder={'New issue'} />
            <button type="submit" >
                Add issue
            </button>
        </form>
    )
}
AddTodo.protoTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddTodo