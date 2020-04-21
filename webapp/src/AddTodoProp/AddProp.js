import React from 'react'
class AddProp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            // isLoading: false,
            // error: null
        }
    }

    // componentDidMount() {
    //     this.setState({ isLoading: true });
    //     console.log(this.props.url);
    //     fetch(this.props.url)
    //         .then(response => response.json())
    //         .then(result => this.setState({
    //             data: result,
    //             isLoading: false
    //         }))
    //         .catch(error => this.setState({ error, isLoading: false }));
    // }

    render() {
        const props = this.props;
        return (
            <ul className="hidenProps" style={{ listStyle: 'none' }}>
                <li>description: {props.description}</li>
                <li> id: {props.id}</li>
            </ul >
        )
    }

}

export default AddProp
