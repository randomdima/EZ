import React from 'react'
import PropTypes from 'prop-types'
import './TodoItem.css'
const AddProp = React.lazy(() => import('../../AddTodoProp/AddProp.js'))

class Button extends React.Component {
    render() {
        return (
            <button className='todoPropButton' {...this.props}>
                 more details
            </button>
        );
    }
}

class TodoItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todo: this.todo,
            index: this.index,
            clicked: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if (!this.state.clicked) {
            this.setState({
                clicked: true
            });
        } else {
            this.setState({
                clicked: false
            });
        }
    }

    render() {
        const prop = this.props
        return (
            <div className="todoItem">
                <div className="todoTitle">
                    <span>
                        {prop.index + 1}
                    </span>
                    <span>
                        {prop.todo.title}
                    </span>
                    <Button onClick={this.handleClick} />
                    <button onClick={() => this.props.removeTodo(prop.todo.id)}>&times;</button>
                </div>
                <div>{this.state.clicked ? <React.Suspense fallback=''> <AddProp {...prop.todo} /></React.Suspense> : null}</div>
            </div>

        );
    }

}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    removeTodo: PropTypes.func.isRequired
}

export default TodoItem
