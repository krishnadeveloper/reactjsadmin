import React, {Component} from "react";

class Dashboard extends Component{
    render(){
        return(
            <div className="content mt-3">
            <div className="col-sm-12">
                <div className="alert  alert-success alert-dismissible fade show" role="alert">
                <span className="badge badge-pill badge-success">Success</span> You successfully read this important alert message.
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>


        <div className="col-sm-6 col-lg-3">
                <div className="card text-white bg-flat-color-1">
                    <div className="card-body pb-0">
                        <div className="dropdown float-right">
                            <button className="btn bg-transparent dropdown-toggle theme-toggle text-light" type="button" id="dropdownMenuButton" data-toggle="dropdown">
                                <i className="fa fa-cog"></i>
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <div className="dropdown-menu-content">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                        </div>
                        <h4 className="mb-0">
                            <span className="count">10468</span>
                        </h4>
                        <p className="text-light">Members online</p>

                        <div className="chart-wrapper px-0" style={{height:"70px"}} height="70">
                            <canvas id="widgetChart1"></canvas>
                        </div>

                    </div>

                </div>
            </div>
            

            <div className="col-sm-6 col-lg-3">
                <div className="card text-white bg-flat-color-2">
                    <div className="card-body pb-0">
                        <div className="dropdown float-right">
                            <button className="btn bg-transparent dropdown-toggle theme-toggle text-light" type="button" id="dropdownMenuButton" data-toggle="dropdown">
                                <i className="fa fa-cog"></i>
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <div className="dropdown-menu-content">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                        </div>
                        <h4 className="mb-0">
                            <span className="count">10468</span>
                        </h4>
                        <p className="text-light">Members online</p>

                        <div className="chart-wrapper px-0" style={{height:"70px"}} height="70">
                            <canvas id="widgetChart2"></canvas>
                        </div>

                    </div>
                </div>
            </div>

            <div className="col-sm-6 col-lg-3">
                <div className="card text-white bg-flat-color-3">
                    <div className="card-body pb-0">
                        <div className="dropdown float-right">
                            <button className="btn bg-transparent dropdown-toggle theme-toggle text-light" type="button" id="dropdownMenuButton" data-toggle="dropdown">
                                <i className="fa fa-cog"></i>
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <div className="dropdown-menu-content">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                        </div>
                        <h4 className="mb-0">
                            <span className="count">10468</span>
                        </h4>
                        <p className="text-light">Members online</p>

                    </div>

                        <div className="chart-wrapper px-0" style={{height:"70px"}} height="70">
                            <canvas id="widgetChart3"></canvas>
                        </div>
                </div>
            </div>
            

            <div className="col-sm-6 col-lg-3">
                <div className="card text-white bg-flat-color-4">
                    <div className="card-body pb-0">
                        <div className="dropdown float-right">
                            <button className="btn bg-transparent dropdown-toggle theme-toggle text-light" type="button" id="dropdownMenuButton" data-toggle="dropdown">
                                <i className="fa fa-cog"></i>
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <div className="dropdown-menu-content">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                        </div>
                        <h4 className="mb-0">
                            <span className="count">10468</span>
                        </h4>
                        <p className="text-light">Members online</p>

                        <div className="chart-wrapper px-3" style={{height:"70px"}} height="70">
                            <canvas id="widgetChart4"></canvas>
                        </div>

                    </div>
                </div>
            </div>
            

            <div className="col-lg-3 col-md-6">
                <div className="social-box facebook">
                    <i className="fa fa-facebook"></i>
                    <ul>
                        <li>
                            <strong><span className="count">40</span> k</strong>
                            <span>friends</span>
                        </li>
                        <li>
                            <strong><span className="count">450</span></strong>
                            <span>feeds</span>
                        </li>
                    </ul>
                </div>
            
            </div>


            <div className="col-lg-3 col-md-6">
                <div className="social-box twitter">
                    <i className="fa fa-twitter"></i>
                    <ul>
                        <li>
                            <strong><span className="count">30</span> k</strong>
                            <span>friends</span>
                        </li>
                        <li>
                            <strong><span className="count">450</span></strong>
                            <span>tweets</span>
                        </li>
                    </ul>
                </div>
                
            </div>


            <div className="col-lg-3 col-md-6">
                <div className="social-box linkedin">
                    <i className="fa fa-linkedin"></i>
                    <ul>
                        <li>
                            <strong><span className="count">40</span> +</strong>
                            <span>contacts</span>
                        </li>
                        <li>
                            <strong><span className="count">250</span></strong>
                            <span>feeds</span>
                        </li>
                    </ul>
                </div>
                
            </div>


            <div className="col-lg-3 col-md-6">
                <div className="social-box google-plus">
                    <i className="fa fa-google-plus"></i>
                    <ul>
                        <li>
                            <strong><span className="count">94</span> k</strong>
                            <span>followers</span>
                        </li>
                        <li>
                            <strong><span className="count">92</span></strong>
                            <span>circles</span>
                        </li>
                    </ul>
                </div>
                
            </div>

            <div className="col-xl-6">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-4">
                                <h4 className="card-title mb-0">Traffic</h4>
                                <div className="small text-muted">October 2017</div>
                            </div>
                            
                            <div className="col-sm-8 hidden-sm-down">
                                <button type="button" className="btn btn-primary float-right bg-flat-color-1"><i className="fa fa-cloud-download"></i></button>
                                <div className="btn-toolbar float-right" role="toolbar" aria-label="Toolbar with button groups">
                                    <div className="btn-group mr-3" data-toggle="buttons" aria-label="First group">
                                        <label className="btn btn-outline-secondary">
                                            <input type="radio" name="options" id="option1" /> Day
                                        </label>
                                        <label className="btn btn-outline-secondary active">
                                            <input type="radio" name="options" id="option2" checked="" /> Month
                                        </label>
                                        <label className="btn btn-outline-secondary">
                                            <input type="radio" name="options" id="option3"/> Year
                                        </label>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className="chart-wrapper mt-4" >
                            <canvas id="trafficChart" style={{height:"200px"}} height="200"></canvas>
                        </div>

                    </div>
                    <div className="card-footer">
                        <ul>
                            <li>
                                <div className="text-muted">Visits</div>
                                <strong>29.703 Users (40%)</strong>
                                <div className="progress progress-xs mt-2" style={{height: "5px"}}>
                                    <div className="progress-bar bg-success" role="progressbar" style={{width: "40%"}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </li>
                            <li className="hidden-sm-down">
                                <div className="text-muted">Unique</div>
                                <strong>24.093 Users (20%)</strong>
                                <div className="progress progress-xs mt-2" style={{height: "5px"}}>
                                    <div className="progress-bar bg-info" role="progressbar" style={{width: "20%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </li>
                            <li>
                                <div className="text-muted">Pageviews</div>
                                <strong>78.706 Views (60%)</strong>
                                <div className="progress progress-xs mt-2" style={{height: "5px"}}>
                                    <div className="progress-bar bg-warning" role="progressbar" style={{width: "60%"}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </li>
                            <li className="hidden-sm-down">
                                <div className="text-muted">New Users</div>
                                <strong>22.123 Users (80%)</strong>
                                <div className="progress progress-xs mt-2" style={{height: "5px"}}>
                                    <div className="progress-bar bg-danger" role="progressbar" style={{width: "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </li>
                            <li className="hidden-sm-down">
                                <div className="text-muted">Bounce Rate</div>
                                <strong>40.15%</strong>
                                <div className="progress progress-xs mt-2" style={{height: "5px"}}>
                                    <div className="progress-bar" role="progressbar" style={{width: "40%"}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        <div className="col-xl-3 col-lg-6">
                <section className="card">
                    <div className="twt-feed blue-bg">
                        <div className="corner-ribon black-ribon">
                            <i className="fa fa-twitter"></i>
                        </div>
                        <div className="fa fa-twitter wtt-mark"></div>

                        <div className="media">
                            <a href="#">
                                <img className="align-self-center rounded-circle mr-3" style={{width:"85px", height:"85px"}} alt="" src="images/admin.jpg" />
                            </a>
                            <div className="media-body">
                                <h2 className="text-white display-6">Jim Doe</h2>
                                <p className="text-light">Project Manager</p>
                            </div>
                        </div>
                    </div>
                    <div className="weather-category twt-category">
                        <ul>
                            <li className="active">
                                <h5>750</h5>
                                Tweets
                            </li>
                            <li>
                                <h5>865</h5>
                                Following
                            </li>
                            <li>
                                <h5>3645</h5>
                                Followers
                            </li>
                        </ul>
                    </div>
                    <div className="twt-write col-sm-12">
                        <textarea placeholder="Write your Tweet and Enter" rows="1" className="form-control t-text-area"></textarea>
                    </div>
                    <footer className="twt-footer">
                        <a href="#"><i className="fa fa-camera"></i></a>
                        <a href="#"><i className="fa fa-map-marker"></i></a>
                        New Castle, UK
                        <span className="pull-right">
                            32
                        </span>
                    </footer>
                </section>
            </div>


            <div className="col-xl-3 col-lg-6">
                <div className="card">
                    <div className="card-body">
                        <div className="stat-widget-one">
                            <div className="stat-icon dib"><i className="ti-money text-success border-success"></i></div>
                            <div className="stat-content dib">
                                <div className="stat-text">Total Profit</div>
                                <div className="stat-digit">1,012</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="col-xl-3 col-lg-6">
                <div className="card">
                    <div className="card-body">
                        <div className="stat-widget-one">
                            <div className="stat-icon dib"><i className="ti-user text-primary border-primary"></i></div>
                            <div className="stat-content dib">
                                <div className="stat-text">New Customer</div>
                                <div className="stat-digit">961</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-xl-3 col-lg-6">
                <div className="card">
                    <div className="card-body">
                        <div className="stat-widget-one">
                            <div className="stat-icon dib"><i className="ti-layout-grid2 text-warning border-warning"></i></div>
                            <div className="stat-content dib">
                                <div className="stat-text">Active Projects</div>
                                <div className="stat-digit">770</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-xl-6">
                <div className="card" >
                    <div className="card-header">
                        <h4>World</h4>
                    </div>
                    <div className="Vector-map-js">
                        <div id="vmap" className="vmap" style={{height: "265px"}}></div>
                    </div>
                </div>
            </div>
        </div>
        );
    };
};

export default Dashboard;