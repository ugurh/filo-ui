import React, { Component } from 'react'

export default class UserList extends Component {
  render() {

      const users = [
          {name:'Harun', isActive:true},
          {name:'Ugur', isActive:false},
          {name:'Emre', isActive:true}
      ];

    return (

      <div>
          <ul>
              {users.filter(user => user.isActive)
              .map(user => <li className='user-item'>{user.name} <input type="checkbox" checked={user.isActive} /></li>)
              }
          </ul>
      </div>
    );
  }
}
