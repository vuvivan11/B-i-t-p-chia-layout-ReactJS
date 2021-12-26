import React, { Component } from "react";
import Search from "./Search";
import Users from "./Users";
import Modal from "./Modal";
import data from "./data.json"
class Usermanagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listUser: data,
      keyword: "",
      userEdit: null
    }
  }

  _findIndex = (id) => {
    return this.state.listUser.findIndex((user) => {
      return user.id === id
    })
  }

  handleDeleteUser = (user) => {
    const listUser = [...this.state.listUser];
    const index = this._findIndex(user.id)
    listUser.splice(index, 1);
    this.setState({
      listUser
    })
  }

  handleOnSubmit = (user) => {
    let listUser = [...this.state.listUser]
    if (user.id) {
      // UPDATE USER
      const index = this._findIndex(user.id);
      if(index !== -1){
        listUser[index] = user
      }
    } else {
      // ADD USER
      // tạo mảng mới từ user với id unique
      const userNew = { ...user, id: new Date().getTime() }
      listUser.push(userNew)
    }
    this.setState({
      listUser
    })
  }

  getKeyword = (keyword) => {
    this.setState({
      keyword
    })
  }

  handleEditUser = (user) => {
    this.setState({
      userEdit: user
    })
  }
  render() {
    let { listUser, keyword, userEdit } = this.state;
    // tìm kiếm từ khóa phù hợp rồi trả về mảng tìm thấy
    listUser = listUser.filter((user) => {
      return user.fullname.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
    })
    return (
      <div className="container">
        <h1 className="display-4 text-center my-3">User Management</h1>
        <div className="d-flex justify-content-between align-items-center">
          <Search keyword={this.getKeyword} />
          <button
            className="btn btn-success"
            data-toggle="modal"
            data-target="#modelIdUser"
            onClick={() => {
              this.setState({
                userEdit: null
              })
            }}
          >
            Add User
          </button>
        </div>
        <Users listUser={listUser} deleteUser={this.handleDeleteUser} editUser={this.handleEditUser} />
        <Modal getListUser={this.handleOnSubmit} userEdit={userEdit} />
      </div>
    );
  }
}

export default Usermanagement;
