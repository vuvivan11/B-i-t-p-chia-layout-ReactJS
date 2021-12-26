import React, { Component } from "react";

export default class FormValidation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values: {
                manv: "",
                tennv: "",
                email: "",
            },
            errors: {
                manv: "",
                tennv: "",
                email: "",
            },
            formValid: false,
            manvValid: false,
            tennvValid: false,
            emailValid: false,
        }
    }
    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({
            values: { ...this.state.values, [name]: value }
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state.values);
    }

    handleErrors = (event) => {
        const { name, value } = event.target
        let mess = value.trim() === "" ? "Vui long nhap " + name : "";
        let { manvValid, tennvValid, emailValid } = this.state;
        switch (name) {
            case "manv":
                manvValid = mess === "" ? true : false;
                break;

            case "tennv":
                tennvValid = mess === "" ? true : false;
                break;

            case "email":
                emailValid = mess === "" ? true : false;
                break;

            default:
                break
        }
        this.setState({
            errors: { ...this.state.errors, [name]: mess },
            manvValid,
            tennvValid,
            emailValid,
        }, () => {
            this.handleFormValid()
        })
    }

    handleFormValid = () => {
        let { manvValid, tennvValid, emailValid } = this.state
        this.setState({
            formValid: manvValid && tennvValid && emailValid
        })
    }
    render() {
        return (
            <div className="container">
                <h3 className="title">*FormValidation</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Mã Nhân Viên</label>
                        <input type="text" className="form-control" name="manv" onChange={this.handleChange} onBlur={this.handleErrors} />
                        {this.state.errors.manv && <div className="alert alert-danger">{this.state.errors.manv}</div>}
                    </div>
                    <div className="form-group">
                        <label>Tên Nhân Viên</label>
                        <input type="text" className="form-control" name="tennv" onChange={this.handleChange} onBlur={this.handleErrors} />
                        {this.state.errors.tennv && <div className="alert alert-danger">{this.state.errors.tennv}</div>}
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" name="email" onChange={this.handleChange} onBlur={this.handleErrors} />
                        {this.state.errors.email && <div className="alert alert-danger">{this.state.errors.email}</div>}
                    </div>
                    <button disabled={!this.state.formValid} type="submit" className="btn btn-success">
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}
