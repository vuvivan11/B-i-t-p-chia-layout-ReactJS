import React, { Component } from "react";
import { connect } from "react-redux"

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      fullname: "",
      username: "",
      email: "",
      phoneNumber: "",
      type: "USER",
    }
    this.closeModal = React.createRef();
  }

  handleOnChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    // this.props
    this.props.OnSubmit(this.state)
    this.closeModal.current.click();
  }

  // component nhận các props
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
    } else {
      // reset Modal
      this.setState({
        id: "",
        fullname: "",
        username: "",
        email: "",
        phoneNumber: "",
        type: "USER",
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
              <h5 className="modal-title">{this.props.userEdit ? "EDIT USER" : "ADD USER"}</h5>
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
              <form onSubmit={this.handleOnSubmit}>
                <div className="form-group">
                  <label>Username</label>
                  <input type="text" className="form-control" name="username" value={this.state.username} onChange={this.handleOnChange} />
                </div>
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" className="form-control" name="fullname" value={this.state.fullname} onChange={this.handleOnChange} />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="text" className="form-control" name="email" value={this.state.email} onChange={this.handleOnChange} />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="text" className="form-control" name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleOnChange} />
                </div>
                <div className="form-group">
                  <label>Type</label>
                  <select className="form-control" value={this.state.type} onChange={this.handleOnChange}>
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
      const action = {
        type: "SUBMIT_USER", 
        payload: user,
      }
      dispatch(action)
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps) (Modal);
