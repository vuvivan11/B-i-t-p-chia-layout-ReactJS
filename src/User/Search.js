import React, { Component } from "react";

class Search extends Component {
  handleGetKeyword = (event) => {
    const { value } = event.target
    this.props.keyword(value)
  }
  render() {
    return <input type="text" className="form-control mb-3 w-50" onChange={this.handleGetKeyword} />;
  }
}

export default Search;
