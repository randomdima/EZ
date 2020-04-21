import React from 'react'
class AddProp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        fetch(this.props.url)
            .then(response => response.json())
            .then(result => this.setState({
                data: result
            }))

    }

    render() {
        const { data } = this.state;
        if (data.length !== 0) {
            return (
                <div className="hidenProps">
                    <ul style={{ listStyle: 'none' }}>
                        <li>User: {data.user.login}</li>
                        <li>Discription: {data.body ? <div>{data.body}</div> : <div>no discription</div>}</li>
                        <li>State: {data.state}</li>
                        <li>Labels: {data.labels.length ? <div>{data.labels[0].name}</div> : <div>no labels</div>}</li>
                    </ul>

                </div>
            )
        } else {
            return (
                <div className="hidenProps">No props</div>
            )
        }

    }
}

export default AddProp
