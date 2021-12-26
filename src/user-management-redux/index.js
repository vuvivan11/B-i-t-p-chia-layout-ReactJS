import React, { Component } from "react";
import Search from "./Search";
import Users from "./Users";
import Modal from "./Modal";
import { connect } from "react-redux"
import { actChangeTitle } from "./../redux-new/actions/index"
class Redux extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="display-4 text-center my-3">User Management</h1>
        <div className="d-flex justify-content-between align-items-center">
          <Search />
          <button
            className="btn btn-success"
            data-toggle="modal"
            data-target="#modelIdUser"
            onClick={() => {
              this.props.changeModalTitle()
            }}
          >
            Add User
          </button>
        </div>
        <Users />
        <Modal />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeModalTitle: () => {
      dispatch(actChangeTitle(null))
    }
  }
}

export default connect(null, mapDispatchToProps) (Redux);
