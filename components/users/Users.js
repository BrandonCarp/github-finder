import React, { Component } from 'react';
import UserItem from './Useritem';

class Users extends Component {
  state = {
    users: [
      {
          id: '1',
          login: 'mojombo',
          avatar_url: 'logo192.png',
          html_url: 'http://google.com'
        },
      {
          id: '2',
          login: 'richardbird',
          avatar_url: 'logo192.png',
          html_url: 'http://google.com'
        },
      {
        id: '3',
        login: 'antetonkumbo',
        avatar_url: 'logo192.png',
        html_url: 'http://google.com'
      }
    ]
}


  render() {
    return (
     <div style={userStyle}>
      {this.state.users.map(user => (
        <UserItem key={user.id} user={user} />
      ))}
     </div>
       
    );
  }
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
}

export default Users;
