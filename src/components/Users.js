import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    return (
      <div>
        <p>Total users: {this.props.userCount}</p>
        <ul>
          {this.props.users.map(user => {
              return <li>{user.username}</li>
          })}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
function mapStateToProps(state){
  debugger
  return {
    users: state.users,
    userCount: state.users.length
  }
}


export default connect(mapStateToProps)(Users);
