import React, { Component } from 'react';
import { connect } from 'react-redux'; /* code change */

class Users extends Component {

  render() {
    return (
      <div>
       <div>User Count: {this.props.userCount}</div>
        <ul> 
          <div> Users: {
            this.props.users.map(
              user => {
                return (<li>
                  {user.username}

                </li>)
              }
            )

          }
          </div>
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
let mapStatetoProps = (state) => {
  return {users: state.users, userCount: state.users.length}
}

export default connect(mapStatetoProps)(Users)
