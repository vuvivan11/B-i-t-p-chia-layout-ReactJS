import React, { Component } from "react";
import DanhSachSanPham from "./danh-sach-san-pham";
import Modal from "./modal";
import data from "./data.json";

export default class LiftingStateUpCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listProduct: data,
      detailProduct: data[0],
      listCard: [],
    }
  }

  detail = (detailProduct) => {
    this.setState({
      detailProduct
    })
  }

  _findIndex = (maSP) => {
    return this.state.listCard.findIndex((item) => {
      return item.maSP === maSP
    });
  }

  addCart = (product) => {
    // tạo mảng mới từ state
    let listCard = [...this.state.listCard];

    // tìm kiếm product đã tồn tại trong this.state.listCard hay chưa
    const index = this._findIndex(product.maSP)

    if (index !== -1) {
      // tìm thấy => tăng số lượng
      listCard[index].soLuong += 1;
    } else {
      // không tìm thấy thì thêm product vào listCard
      const productCard = {
        maSP: product.maSP,
        tenSP: product.tenSP,
        hinhAnh: product.hinhAnh,
        soLuong: 1,
        giaBan: product.giaBan,
      }
      listCard.push(productCard);
    }
    this.setState({
      listCard
    })
  }

  handleDelete = (product) => {
    const index = this._findIndex(product.maSP);  
    console.log(index);
    if(index !== -1){
      let listCart = [...this.state.listCard];
      listCart.splice(index, 1);

      this.setState({
        listCard: listCart,
      })
    }
  }

  handleUpdateQuantity = (product, status) => {
    if(status === true){
      product.soLuong += 1;
    }else{
      product.soLuong -= 1;
    }
  }

  render() {
    const { listProduct, detailProduct, listCard } = this.state;

    return (
      <div className="m-auto">
        <h3 className="title">Bài tập giỏ hàng</h3>
        <div className="container">
          <button
            className="btn btn-danger"
            data-toggle="modal"
            data-target="#modelId"
          >
            Giỏ hàng (0)
          </button>
        </div>
        <DanhSachSanPham listProduct={listProduct} detail={this.detail} addCart={this.addCart} />
        <Modal listCard={listCard} deleteCart={this.handleDelete} updateQuantity={this.handleUpdateQuantity}/>
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
