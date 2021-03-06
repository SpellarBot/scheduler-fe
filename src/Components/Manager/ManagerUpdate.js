import React, { Component } from 'react';
import axios from 'axios'

class ManagerUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            manager: {}
        };
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount() {
        axios.get('https://scheduler-be-1.herokuapp.com/api/manager/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    manager: res.data
                })
                console.log(this.state.manager)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    onChange = (e) => {
        const state = this.state.manager
        state[e.target.name] = e.target.value;
        this.setState({ manager: state });
    }

    onSubmit = (e) => {
        console.log("update submitting")
        e.preventDefault();
        const { full_name, position, photo_url } = this.state.manager
        axios.put('https://scheduler-be-1.herokuapp.com/api/manager/' + this.props.match.params.id, { full_name, position, photo_url })
            .then((res) => {
                console.log(res)
                this.props.history.push('/manager/' + this.props.match.params.id)
            });

    }

    render() {
        const { full_name, position, photo_url } = this.state.manager
        return (

            <form onSubmit={this.onSubmit}>
                <h3>Edit Manager Details</h3>
                <label>Full Name:</label>
                <input
                    type="text"
                    name="full_name"
                    value={full_name}
                    onChange={this.onChange}
                />
                <br />
                <label>Position: </label>
                <select value={position} onChange={this.onChange}>
                    <option name='position' value='manager'>Manager</option>
                    <option name='position' value='general_manager'>General Manager</option>
                    <option name='position' value="assistant_manager">Assistant Manager</option>
                </select>
                <br />
                <label>Photo URL:</label>
                <input
                    type="text"
                    name="photo_url"
                    value={photo_url}
                    onChange={this.onChange}
                />
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default ManagerUpdate;