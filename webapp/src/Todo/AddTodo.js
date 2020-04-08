import React, { useState } from 'react'
import PropTypes from 'prop-types'


const styles = {
    form: {

        display: 'flex',
        justifyContent: ' center',
        alignItems: 'center'
    },
    input: {
        width: '50%',
        height: '45px',
        marginLeft: '5rem',
        marginRight: '0px',
        border: '1px solid #6c7db0',
        borderRadius: '5px',
        fontSize: '35px',
        fontFamily: ' cursive'
    },
    button: {
        height: '40px',
        border: '1px solid #6c7db0',
        borderRadius: '5px',
    }
}

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
            <input style={styles.input} value={value} onChange={event => setValue(event.target.value)} />
            <button type="submit" style={styles.button} >
                Add todo
            </button>
        </form>
    )
}
AddTodo.protoTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddTodo