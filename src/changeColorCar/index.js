import React, { Component } from 'react'

export default class ChangeColorCar extends Component {
    constructor(props){
        super(props);
        this.state = {
            srcImg: "./img/imgRedCar.jpg",
        }
    }


    handleBtn = (src) => {
        this.setState({
            srcImg: src,
        })
    }



    render() {
        const { srcImg } = this.state;

        return (
            <div className="container row pt-5">
                <div className="col-md-6">
                    <img className="img-fluid" src={srcImg} alt="car"/>
                </div>
                <div className="col-md-6">
                    <button className="btn btn-danger" onClick={() => {this.handleBtn("./img/imgRedCar.jpg")}}>Red</button>
                    <button className="btn btn-light mx-5"  onClick={() => {this.handleBtn("./img/imgSilverCar.jpg")}}>Silver</button>
                    <button className="btn btn-dark"  onClick={() => {this.handleBtn("./img/imgBlackCar.jpg")}}>Black</button>
                </div>
            </div>
        )
    }
}
