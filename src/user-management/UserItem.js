import React, { Component } from "react";

class UserItem extends Component {
  handleDeleteUser = () => {
    this.props.deleteUser(this.props.listUser)
  }

  render() {
    return (
      <tr>
        <td>{this.props.listUser.fullname}</td>
        <td>{this.props.listUser.username}</td>
        <td>{this.props.listUser.email}</td>
        <td>{this.props.listUser.phoneNumber}</td>
        <td>{this.props.listUser.type}</td>
        <td>
          <button
            className="btn btn-info mr-2"
            data-toggle="modal"
            data-target="#modelIdUser"
          >
            Edit
          </button>
          <button className="btn btn-danger" onClick={this.handleDeleteUser}>Delete</button>
        </td>
      </tr>
    );
  }
}

export default UserItem;
