import React, { Component } from 'react';

class YK extends Component {
    render() {
        const users = [
            { name: "Harun" },
            { name: "Uğur" }
        ];
        const isShown = false;

        return (
            <div>
                {
                    isShown &&
                    <ul>

                        {users.map(user => <li>{user.name}</li>)}
                    </ul>
                }
            </div>
        );
    }
}

export default YK;