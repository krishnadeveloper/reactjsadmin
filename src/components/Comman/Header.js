import React from "react";
import {NavLink} from "react-router-dom";
export default () => {
        return(
            <header id="header" className="header">
            <div className="header-menu">
                <div className="col-sm-7">
                    <a id="menuToggle" className="menutoggle pull-left"><i className="fa fa fa-angle-double-left"></i></a>
                    <div className="header-left">
                        <button className="search-trigger"><i className="fa fa-search"></i></button>
                        <div className="form-inline">
                            <form className="search-form">
                                <input className="form-control mr-sm-2" type="text" placeholder="Search ..." aria-label="Search" />
                                <button className="search-close" type="submit"><i className="fa fa-close"></i></button>
                            </form>
                        </div>

                        <div className="dropdown for-notification">
                          <button className="btn btn-secondary dropdown-toggle" type="button" id="notification" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fa fa-bell"></i>
                            <span className="count bg-danger">5</span>
                          </button>
                          <div className="dropdown-menu" aria-labelledby="notification">
                            <p className="red">You have 3 Notification</p>
                            <a className="dropdown-item media bg-flat-color-1" href="javascript:;">
                                <i className="fa fa-check"></i>
                                <p>Server #1 overloaded.</p>
                            </a>
                            <a className="dropdown-item media bg-flat-color-4" href="javascript:;">
                                <i className="fa fa-info"></i>
                                <p>Server #2 overloaded.</p>
                            </a>
                            <a className="dropdown-item media bg-flat-color-5" href="javascript:;">
                                <i className="fa fa-warning"></i>
                                <p>Server #3 overloaded.</p>
                            </a>
                          </div>
                        </div>

                        <div className="dropdown for-message">
                          <button className="btn btn-secondary dropdown-toggle" type="button"
                                id="message"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="ti-email"></i>
                            <span className="count bg-primary">9</span>
                          </button>
                          <div className="dropdown-menu" aria-labelledby="message">
                            <p className="red">You have 4 Mails</p>
                            <a className="dropdown-item media bg-flat-color-1" href="javascript:;">
                                <span className="photo media-left"><img alt="avatar" src={"/images/avatar/1.jpg"} /></span>
                                <span className="message media-body">
                                    <span className="name float-left">Jonathan Smith</span>
                                    <span className="time float-right">Just now</span>
                                        <p>Hello, this is an example msg</p>
                                </span>
                            </a>
                            <a className="dropdown-item media bg-flat-color-4" href="javascript:;">
                                <span className="photo media-left"><img alt="avatar" src={"/images/avatar/2.jpg"} /></span>
                                <span className="message media-body">
                                    <span className="name float-left">Jack Sanders</span>
                                    <span className="time float-right">5 minutes ago</span>
                                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                                </span>
                            </a>
                            <a className="dropdown-item media bg-flat-color-5" href="javascript:;">
                                <span className="photo media-left"><img alt="avatar" src={"/images/avatar/3.jpg"} /></span>
                                <span className="message media-body">
                                    <span className="name float-left">Cheryl Wheeler</span>
                                    <span className="time float-right">10 minutes ago</span>
                                        <p>Hello, this is an example msg</p>
                                </span>
                            </a>
                            <a className="dropdown-item media bg-flat-color-3" href="javascript:;">
                                <span className="photo media-left"><img alt="avatar" src={"/images/avatar/4.jpg"} /></span>
                                <span className="message media-body">
                                    <span className="name float-left">Rachel Santos</span>
                                    <span className="time float-right">15 minutes ago</span>
                                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                                </span>
                            </a>
                          </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-5">
                    <div className="user-area dropdown float-right">
                        <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img className="user-avatar rounded-circle" src={"/images/admin.jpg"} alt="User Avatar" />
                        </a>

                        <div className="user-menu dropdown-menu">
                                <a className="nav-link" href="javascript:;"><i className="fa fa- user"></i>My Profile</a>

                                <a className="nav-link" href="javascript:;"><i className="fa fa- user"></i>Notifications <span className="count">13</span></a>

                                <a className="nav-link" href="javascript:;"><i className="fa fa -cog"></i>Settings</a>
                                <NavLink className="nav-link" to="/login">Logout</NavLink>
                        </div>
                    </div>

                    <div className="language-select dropdown" id="language-select">
                        <a className="dropdown-toggle" href="javascript:;" data-toggle="dropdown"  id="language" aria-haspopup="true" aria-expanded="true">
                            <i className="flag-icon flag-icon-us"></i>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="language" >
                            <div className="dropdown-item">
                                <span className="flag-icon flag-icon-fr"></span>
                            </div>
                            <div className="dropdown-item">
                                <i className="flag-icon flag-icon-es"></i>
                            </div>
                            <div className="dropdown-item">
                                <i className="flag-icon flag-icon-us"></i>
                            </div>
                            <div className="dropdown-item">
                                <i className="flag-icon flag-icon-it"></i>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </header>
        );
}