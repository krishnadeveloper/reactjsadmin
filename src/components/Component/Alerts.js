import React from "react";
import LeftNav from "../Comman/LeftNav";
import Header from "../Comman/Header";
import Breacrumb from "../Comman/Breacrumb";

export default ()=>{
    return(
        <div>
            <LeftNav />
            <div id="right-panel" className="right-panel">
                <Header />
                <Breacrumb />
                <div className="content mt-3">
                        <div className="animated fadeIn">
                            <div className="alerts">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="card">
                                            <div className="card-header">
                                                <strong className="card-title">Alerts</strong>
                                            </div>
                                            <div className="card-body">
                                                <div className="alert alert-primary" role="alert">
                                                    This is a primary alert—check it out!
                                                </div>
                                                <div className="alert alert-secondary" role="alert">
                                                    This is a secondary alert—check it out!
                                                </div>
                                                <div className="alert alert-success" role="alert">
                                                    This is a success alert—check it out!
                                                </div>
                                                <div className="alert alert-danger" role="alert">
                                                    This is a danger alert—check it out!
                                                </div>
                                                <div className="alert alert-warning" role="alert">
                                                    This is a warning alert—check it out!
                                                </div>
                                                <div className="alert alert-info" role="alert">
                                                    This is a info alert—check it out!
                                                </div>
                                                <div className="alert alert-light" role="alert">
                                                    This is a light alert—check it out!
                                                </div>
                                                <div className="alert alert-dark" role="alert">
                                                    This is a dark alert—check it out!
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card">
                                            <div className="card-header">
                                                <strong className="card-title">Link Color Alerts</strong>
                                            </div>
                                            <div className="card-body">
                                                <div className="alert alert-primary" role="alert">
                                                    This is a primary alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                                                </div>
                                                <div className="alert alert-secondary" role="alert">
                                                    This is a secondary alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                                                </div>
                                                <div className="alert alert-success" role="alert">
                                                    This is a success alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                                                </div>
                                                <div className="alert alert-danger" role="alert">
                                                    This is a danger alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                                                </div>
                                                <div className="alert alert-warning" role="alert">
                                                    This is a warning alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                                                </div>
                                                <div className="alert alert-info" role="alert">
                                                    This is a info alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                                                </div>
                                                <div className="alert alert-light" role="alert">
                                                    This is a light alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                                                </div>
                                                <div className="alert alert-dark" role="alert">
                                                    This is a dark alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                                                </div>
                                            </div>
                                        </div>


                                    </div>


                                    <div className="col-md-6">

                                        <div className="card">
                                            <div className="card-header">
                                                <strong className="card-title">Dismissing Alerts</strong>
                                            </div>
                                            <div className="card-body">
                                                <div className="sufee-alert alert with-close alert-primary alert-dismissible fade show">
                                                    <span className="badge badge-pill badge-primary">Success</span>
                                                        You successfully read this important alert.
                                                      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>

                                                <div className="sufee-alert alert with-close alert-secondary alert-dismissible fade show">
                                                    <span className="badge badge-pill badge-secondary">Success</span>
                                                        You successfully read this important alert.
                                                      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>

                                                <div className="sufee-alert alert with-close alert-success alert-dismissible fade show">
                                                    <span className="badge badge-pill badge-success">Success</span>
                                                        You successfully read this important alert.
                                                      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>

                                                <div className="sufee-alert alert with-close alert-danger alert-dismissible fade show">
                                                    <span className="badge badge-pill badge-danger">Success</span>
                                                        You successfully read this important alert.
                                                      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>

                                                <div className="sufee-alert alert with-close alert-warning alert-dismissible fade show">
                                                    <span className="badge badge-pill badge-warning">Success</span>
                                                        You successfully read this important alert.
                                                      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>

                                                <div className="sufee-alert alert with-close alert-info alert-dismissible fade show">
                                                    <span className="badge badge-pill badge-info">Success</span>
                                                        You successfully read this important alert.
                                                      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>

                                                <div className="sufee-alert alert with-close alert-light alert-dismissible fade show">
                                                    <span className="badge badge-pill badge-light">Success</span>
                                                        You successfully read this important alert.
                                                      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>

                                                <div className="sufee-alert alert with-close alert-dark alert-dismissible fade show">
                                                    <span className="badge badge-pill badge-dark">Success</span>
                                                        You successfully read this important alert.
                                                      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="card">
                                            <div className="card-header">
                                                <strong className="card-title">Contents</strong>
                                            </div>
                                            <div className="card-body">
                                                <div className="alert alert-success" role="alert">
                                                    <h4 className="alert-heading">Well done!</h4>
                                                    <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
                                                    <hr/>
                                                    <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
                                                </div>

                                                <div className="alert alert-warning" role="alert">
                                                    <h4 className="alert-heading">Well done!</h4>
                                                    <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
                                                    <hr/>
                                                    <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
                                                </div>

                                                <div className="alert alert-danger" role="alert">
                                                    <h4 className="alert-heading">Well done!</h4>
                                                    <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
                                                    <hr/>
                                                    <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
            </div>
        </div>
    )
}