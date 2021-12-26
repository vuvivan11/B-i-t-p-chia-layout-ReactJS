import React, { Component } from "react";
import { connect } from "react-redux";
import { actOnSubmit } from "./../redux-new/actions/index"

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      fullname: "",
      username: "",
      email: "",
      phoneNumber: "",
      type: "USER"
    }
    this.closeModal = React.createRef();
  }
  handleChange = (event) => {
    const { value, name } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.OnSubmit(this.state)
    this.closeModal.current.click()
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.userEdit) {
      this.setState({
        id: nextProps.userEdit.id,
        fullname: nextProps.userEdit.fullname,
        username: nextProps.userEdit.username,
        email: nextProps.userEdit.email,
        phoneNumber: nextProps.userEdit.phoneNumber,
        type: nextProps.userEdit.type,
      })
    }
     else {
      // reset modal
      this.setState({
        id: "",
        fullname: "",
        username: "",
        email: "",
        phoneNumber: "",
        type: "USER"
      })
    }
  }

  render() {
    return (
      <div
        className="modal fade"
        id="modelIdUser"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{this.props.userEdit ? "EDIT USER" : "ADD USER"} </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                ref={this.closeModal}
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label>Username</label>
                  <input type="text" className="form-control" name="username" value={this.state.username} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" className="form-control" name="fullname" value={this.state.fullname} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="text" className="form-control" name="email" value={this.state.email} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="text" className="form-control" name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                  <label>Type</label>
                  <select className="form-control" name="type" value={this.state.type} onChange={this.handleChange} >
                    <option>USER</option>
                    <option>VIP</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userEdit: state.userReducer.userEdit
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    OnSubmit: (user) => {
      dispatch(actOnSubmit(user))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Modal);  
