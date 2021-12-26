import React, { Component } from "react";

export default class SanPham extends Component {
  render() {
    const { listProduct } = this.props;
    return (
      <div className="col-sm-4">
        <div className="card">
          <img className="card-img-top" src={listProduct.hinhAnh} alt="" />
          <div className="card-body">
            <h4 className="card-title">{listProduct.tenSP}</h4>
            <button className="btn btn-success" onClick={() => {this.props.detailProduct(listProduct)}}>Chi tiết</button>
            <button className="btn btn-danger" onClick={() => {this.props.addCart(listProduct)}}>Thêm giỏ hàng</button>
          </div>
        </div>
      </div>
    );
  }
}
