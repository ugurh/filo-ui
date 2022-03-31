import React, { Component } from 'react';

class YK extends Component {
    render() {
        const users = [
            { name: "Harun" },
            { name: "Uğur" }
        ];
        const isShown = false;

        const arrowFunction = () => 'Arrow Function';

        return (
            <div>
                {
                    isShown &&
                    <ul>

                        {users.map(user => <li>{user.name}</li>)}
                    </ul>
                }
                {arrowFunction()}
            </div>
        );
    }
}

export default YK;