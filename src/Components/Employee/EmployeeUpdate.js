import React, { Component } from 'react';
import axios from 'axios'

class EmployeeUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employee: {}
        };
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount() {
        console.log('http://localhost:8000/api/employee/' + this.props.match.params.id)
        axios.get('http://localhost:8000/api/employee/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    employee: res.data
                })
                console.log(this.state.employee)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    onChange = (e) => {
        const state = this.state.employee
        state[e.target.name] = e.target.value;
        this.setState({ employee: state });
    }

    onSubmit = (e) => {
        console.log("update submitting")
        e.preventDefault();
        const { full_name, position, photo_url } = this.state.employee
        // put request throwing 403 - forbidden
        axios.put('http://localhost:8000/api/employee/' + this.props.match.params.id, { full_name, position, photo_url })
            .then((res) => {
                console.log(res)
                this.props.history.push('/employee/' + this.props.match.params.id)
            });

    }

    render() {
        const { full_name, position, photo_url } = this.state.employee
        return (

            <form onSubmit={this.onSubmit}>
                <h3>Edit Employee Details</h3>
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
                    <option name='position' value='server'>Server</option>
                    <option name='position' value='host'>Host</option>
                    <option name='position' value="bartender">Bartender</option>
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

export default EmployeeUpdate;