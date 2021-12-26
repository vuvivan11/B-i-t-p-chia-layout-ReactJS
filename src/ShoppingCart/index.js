import React, { Component } from "react";
import DanhSachSanPham from "./danh-sach-san-pham";
import Modal from "./modal";
import data from "./data.json"

export default class ShoppingCart extends Component {
  constructor(props){
    super(props);
    this.state = {
      listProduct: data,
      detailProduct: data[0],
      listCart: []
    }
  }

  handleDetailProduct = (product) => {
    this.setState({
      detailProduct: product,
    })
  }

  _findIndex = (maSP) => {
    return this.state.listCart.findIndex((product) => {
      return product.maSP === maSP
    })
  }

  handleAddCart = (product) => {
    let listCart = [...this.state.listCart]
    const index = this._findIndex(product.maSP)
    if(index !== -1){
      // tim thay
      listCart[index].soLuong += 1;
    }else{
      // khong tim thay
      const productCart = {
        maSP: product.maSP,
        tenSP: product.tenSP,
        hinhAnh: product.hinhAnh,
        soLuong: 1,
        giaBan: product.giaBan,
      }
      listCart.push(productCart)
    }
    this.setState({
      listCart
    })
  }

  handleDeleteCart = (product) => {
    let listCart = [...this.state.listCart]
    const index = this._findIndex(product.maSP)
    listCart.splice(index, 1)
    this.setState({
      listCart
    })
  }

  updateProductQuantity = (product, status) => {
    let listCart = [...this.state.listCart]
    const index = this._findIndex(product.maSP)
    if(status){
      listCart[index].soLuong += 1
    }else{
      listCart[index].soLuong -= 1
    }
    this.setState({
      listCart
    })
  }

  totalProductQuantity = () => {
    return this.state.listCart.reduce((total, product) => {
      return total += product.soLuong
    }, 0)
  }

  render() {
    const { listProduct, detailProduct, listCart } = this.state;
    return (
      <div>
        <h3 className="title">Bài tập giỏ hàng</h3>
        <div className="container">
          <button
            className="btn btn-danger"
            data-toggle="modal"
            data-target="#modelId"
          >
            Giỏ hàng ({this.totalProductQuantity()})
          </button>
        </div>
        <DanhSachSanPham listProduct={listProduct} detailProduct={this.handleDetailProduct} addCart = {this.handleAddCart}/>
        <Modal listCart={listCart} deleteCart = {this.handleDeleteCart} productQuantity={this.updateProductQuantity} />
        <div className="row">
          <div className="col-sm-5">
            <img className="img-fluid" src={detailProduct.hinhAnh} alt="" />
          </div>
          <div className="col-sm-7">
            <h3>Thông số kỹ thuật</h3>
            <table className="table">
              <tbody>
                <tr>
                  <td>Màn hình</td>
                  <td>{detailProduct.manHinh}</td>
                </tr>
                <tr>
                  <td>Hệ điều hành</td>
                  <td>{detailProduct.heDieuHanh}</td>
                </tr>
                <tr>
                  <td>Camera trước</td>
                  <td>{detailProduct.cameraTruoc}</td>
                </tr>
                <tr>
                  <td>Camera sau</td>
                  <td>{detailProduct.cameraSau}</td>
                </tr>
                <tr>
                  <td>RAM</td>
                  <td>{detailProduct.ram}</td>
                </tr>
                <tr>
                  <td>ROM</td>
                  <td>{detailProduct.rom}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
