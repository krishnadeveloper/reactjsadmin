import React, {Component} from "react";
import {NavLink} from "react-router-dom";
class ForgetPassword extends Component{
    render(){
        return(
            <div className="sufee-login d-flex align-content-center flex-wrap">
                <div className="container">
                    <div className="login-content">
                        <div className="login-logo">
                            <NavLink to="/">
                                <img className="align-content" src="images/logo.png" alt="" />
                            </NavLink>
                        </div>
                        <div className="login-form">
                            <form>
                                <div className="form-group">
                                    <label>Email address</label>
                                    <input type="email" className="form-control" placeholder="Email" />
                                </div>
                                <button type="submit" className="btn btn-primary btn-flat m-b-15">Submit</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default ForgetPassword;