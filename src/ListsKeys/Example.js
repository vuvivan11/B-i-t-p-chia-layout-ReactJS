import React, { Component } from 'react';
import data from './data.json';

export default class Example extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listMovie: data,
        }
    }

    renderListMovie = () => {
        return this.state.listMovie.map((list) => {
            return (
                <div className="col-md-4" key={list.maPhim}>
                    <div className="card">
                        <img className="card-img-top" src={list.hinhAnh} alt="img" />
                        <div className="card-body">
                            <h4 className="card-title">{list.tenPhim}</h4>
                            <p className="card-text">{list.moTa}</p>
                        </div>
                    </div>
                </div>
            )
        })
    }

    render() {

        return (
            <div>
                <h3>Example Lists Keys</h3>
                <div classname="container">
                    <div className="row m-auto">
                        {this.renderListMovie()}
                    </div>
                </div>

            </div>
        )
    }
}
