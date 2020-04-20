import React from 'react'
class AddProp extends React.Component {
    constructor(props) {
        super(props);
        // console.log(props)
        this.state = {
            data: [],
            isLoading: false,
            error: null
        }
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        console.log(this.props.url);
        fetch(this.props.url)
            .then(response => response.json())
            .then(result => this.setState({
                data: result,
                isLoading: false
            }))
            .catch(error => this.setState({ error, isLoading: false }));
    }

    render() {
        const { data } = this.state;
        if (data.length !== 0) {
            return (
                <div className="hidenProps">
                    {data.title}
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
