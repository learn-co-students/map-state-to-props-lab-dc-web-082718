import React, { Component } from 'react';
import {connect} from 'react-redux'

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          {this.props.users[0] ?
            this.props.users.map(user => <li>{user.username}</li>)
            : null}
        </ul>
        <div>{this.props.userCount}</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
    userCount: state.users.length
 }
}

export default connect(mapStateToProps)(Users)
