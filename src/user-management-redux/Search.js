import React, { Component } from "react";
import { connect } from "react-redux";
import { actGetKeyword } from "./../redux-new/actions/index"

class Search extends Component {
  handleChange = (event) => {
    const { value } = event.target
    this.props.getKeyword(value)
  }
  render() {
    return <input type="text" className="form-control mb-3 w-50" onChange={this.handleChange}/>;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getKeyword: (keyword) => {
      dispatch(actGetKeyword(keyword))
    }
  }
}

export default connect(null, mapDispatchToProps) (Search);
