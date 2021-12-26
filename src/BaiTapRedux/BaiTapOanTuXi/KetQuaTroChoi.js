import React, { Component } from 'react';
import { connect } from "react-redux"

class KetQuaTroChoi extends Component {
    render() {
        return (
            <div>
                <div className='display-4 text-warning'>{this.props.ketQua}</div>
                <div className='display-4 text-success'>So ban thang: <span className='text-warning'>{this.props.soBanThang}</span></div>
                <div className='display-4 text-success'>Tong so ban choi: <span className='text-warning'>{this.props.soBanChoi}</span></div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ketQua: state.counterReducer.ketQua,
        soBanThang: state.counterReducer.soBanThang,
        soBanChoi: state.counterReducer.soBanChoi,
    }
}

export default connect(mapStateToProps, null) (KetQuaTroChoi)