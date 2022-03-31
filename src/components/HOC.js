import React, { Component } from 'react';

const doFilter = query => user =>
    query === user.name;

class HOC extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: ''
        }
        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        this.setState({
            query: event.target.value
        });
    }

    render() {
        const users = [
            { name: 'Ugur' },
            { name: 'Harun' },
            { name: 'Emre' }
        ]

        return (
            <div>
                <ul>
                    {
                        users
                            .filter(doFilter(this.state.query))
                            .map(user => <li>{user.name}</li>)
                    }
                </ul>
                <h5>Enter Name</h5>
                <input type='text' onChange={this.onChange} />
            </div>
        );
    }
}

export default HOC;