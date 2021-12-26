import React, { Component } from "react";
import { connect } from "react-redux"

class Search extends Component {
  handleOnChange = (event) => {
    const { value } = event.target;
    this.props.getKeyword(value);
  }

  render() {
    return <input type="text" className="form-control mb-3 w-50" onChange={this.handleOnChange} />;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getKeyword: (value) => {
      const action = {
        type: "SEARCH_USER",
        payload: value
      }
      dispatch(action)
    }
  }
}

export default connect(null, mapDispatchToProps) (Search);
