import React from "react"
import LeftNav from "../Comman/LeftNav";
import Header from "../Comman/Header";
import Breacrumb from "../Comman/Breacrumb";


export default ()=>{
    return(
        <React.Fragment>
            <LeftNav/>
            <div className="right-panel" id="right-panel">
                <Header />
                <Breacrumb />
                <div className="content mt-3">
                    <div className="animated fadeIn">
                        <div className="row">
                            <div className="col-md-6 col-lg-3">
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

                            <div className="col-md-6 col-lg-3">
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

                                        <div className="chart-wrapper px-0" style={{height: "70px"}} height="70">
                                            <canvas id="widgetChart2"></canvas>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            

                            <div className="col-md-6 col-lg-3">
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

                                        <div className="chart-wrapper px-0" style={{height: "70px"}} height="70">
                                            <canvas id="widgetChart3"></canvas>
                                        </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3">
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

                                        <div className="chart-wrapper px-3" style={{height: "70px"}} height="70">
                                            <canvas id="widgetChart4"></canvas>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            


                            <div className="col-lg-3 col-md-6">
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

                            <div className="col-lg-3 col-md-6">
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

                            <div className="col-lg-3 col-md-6">
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

                            <div className="col-lg-3 col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="stat-widget-one">
                                            <div className="stat-icon dib"><i className="ti-link text-danger border-danger"></i></div>
                                            <div className="stat-content dib">
                                                <div className="stat-text">Referrals</div>
                                                <div className="stat-digit">2,781</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="stat-widget-four">
                                            <div className="stat-icon dib">
                                                <i className="ti-server text-muted"></i>
                                            </div>
                                            <div className="stat-content">
                                                <div className="text-left dib">
                                                    <div className="stat-heading">Database</div>
                                                    <div className="stat-text">Total: 765</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="stat-widget-four">
                                            <div className="stat-icon dib">
                                                <i className="ti-user text-muted"></i>
                                            </div>
                                            <div className="stat-content">
                                                <div className="text-left dib">
                                                    <div className="stat-heading">Users</div>
                                                    <div className="stat-text">Total: 24720</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="stat-widget-four">
                                            <div className="stat-icon dib">
                                                <i className="ti-stats-up text-muted"></i>
                                            </div>
                                            <div className="stat-content">
                                                <div className="text-left dib">
                                                    <div className="stat-heading">Daily Sales</div>
                                                    <div className="stat-text">Total: $76,58,714</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="stat-widget-four">
                                            <div className="stat-icon dib">
                                                <i className="ti-pulse text-muted"></i>
                                            </div>
                                            <div className="stat-content">
                                                <div className="text-left dib">
                                                    <div className="stat-heading">Bandwidth</div>
                                                    <div className="stat-text">Total: 4TB</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3">
                                <div className="card bg-flat-color-1 text-light">
                                    <div className="card-body">
                                        <div className="h4 m-0">89.9%</div>
                                        <div>Lorem ipsum...</div>
                                        <div className="progress-bar bg-light mt-2 mb-2" role="progressbar" style={{width:"20%", height: "5px"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                        <small className="text-light">Lorem ipsum dolor sit amet enim.</small>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3">
                                <div className="card bg-flat-color-3 text-light">
                                    <div className="card-body">
                                        <div className="h4 m-0">12.124</div>
                                        <div>Lorem ipsum...</div>
                                        <div className="progress-bar bg-light mt-2 mb-2" role="progressbar" style={{width:"20%", height: "5px"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                        <small className="text-light">Lorem ipsum dolor sit amet enim.</small>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3">
                                <div className="card bg-flat-color-4 text-light">
                                    <div className="card-body">
                                        <div className="h4 m-0">$98.111,00</div>
                                        <div>Lorem ipsum...</div>
                                        <div className="progress-bar bg-light mt-2 mb-2" role="progressbar" style={{width:"20%", height: "5px"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                        <small className="text-light">Lorem ipsum dolor sit amet enim.</small>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3">
                                <div className="card bg-flat-color-2 text-light">
                                    <div className="card-body">
                                        <div className="h4 m-0">$98.111,00</div>
                                        <div>Lorem ipsum...</div>
                                        <div className="progress-bar bg-light mt-2 mb-2" role="progressbar" style={{width:"20%", height: "5px"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                        <small className="text-light">Lorem ipsum dolor sit amet enim.</small>
                                    </div>
                                </div>
                            </div>




                            <div className="col-6 col-lg-3">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="clearfix">
                                            <i className="fa fa-cogs bg-flat-color-5 p-3 font-2xl mr-3 float-left text-light"></i>
                                            <div className="h5 text-secondary mb-0 mt-1">$4.999,50</div>
                                            <div className="text-muted text-uppercase font-weight-bold font-xs small">Income</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-lg-3">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="clearfix">
                                            <i className="fa fa-laptop bg-info p-3 font-2xl mr-3 float-left text-light"></i>
                                            <div className="h5 text-secondary mb-0 mt-1">$4.999,50</div>
                                            <div className="text-muted text-uppercase font-weight-bold font-xs small">Income</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-lg-3">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="clearfix">
                                            <i className="fa fa-moon-o bg-warning p-3 font-2xl mr-3 float-left text-light"></i>
                                            <div className="h5 text-secondary mb-0 mt-1">$4.999,50</div>
                                            <div className="text-muted text-uppercase font-weight-bold font-xs small">Income</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-lg-3">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="clearfix">
                                            <i className="fa fa-bell bg-danger p-3 font-2xl mr-3 float-left text-light"></i>
                                            <div className="h5 text-secondary mb-0 mt-1">$4.999,50</div>
                                            <div className="text-muted text-uppercase font-weight-bold font-xs small">Income</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-lg-3">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="clearfix">
                                            <i className="fa fa-cogs bg-flat-color-5 p-3 font-2xl mr-3 float-left text-light"></i>
                                            <div className="h5 text-secondary mb-0 mt-1">$4.999,50</div>
                                            <div className="text-muted text-uppercase font-weight-bold font-xs small">Income</div>
                                        </div>
                                        <div className="b-b-1 pt-3"></div>
                                        <hr/>
                                        <div className="more-info pt-2" style={{"margin-bottom":"-10px"}}>
                                            <a className="font-weight-bold font-xs btn-block text-muted small" href="#">View More <i className="fa fa-angle-right float-right font-lg"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-lg-3">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="clearfix">
                                            <i className="fa fa-laptop bg-info p-3 font-2xl mr-3 float-left text-light"></i>
                                            <div className="h5 text-secondary mb-0 mt-1">$4.999,50</div>
                                            <div className="text-muted text-uppercase font-weight-bold font-xs small">Income</div>
                                        </div>
                                        <div className="b-b-1 pt-3"></div>
                                        <hr/>
                                        <div className="more-info pt-2" style={{"margin-bottom":"-10px"}}>
                                            <a className="font-weight-bold font-xs btn-block text-muted small" href="#">View More <i className="fa fa-angle-right float-right font-lg"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-lg-3">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="clearfix">
                                            <i className="fa fa-moon-o bg-warning p-3 font-2xl mr-3 float-left text-light"></i>
                                            <div className="h5 text-secondary mb-0 mt-1">$4.999,50</div>
                                            <div className="text-muted text-uppercase font-weight-bold font-xs small">Income</div>
                                        </div>
                                        <div className="b-b-1 pt-3"></div>
                                        <hr/>
                                        <div className="more-info pt-2" style={{"margin-bottom":"-10px"}}>
                                            <a className="font-weight-bold font-xs btn-block text-muted small" href="#">View More <i className="fa fa-angle-right float-right font-lg"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-lg-3">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="clearfix">
                                            <i className="fa fa-bell bg-danger p-3 font-2xl mr-3 float-left text-light"></i>
                                            <div className="h5 text-secondary mb-0 mt-1">$4.999,50</div>
                                            <div className="text-muted text-uppercase font-weight-bold font-xs small">Income</div>
                                        </div>
                                        <div className="b-b-1 pt-3"></div>
                                        <hr/>
                                        <div className="more-info pt-2" style={{"margin-bottom":"-10px"}}>
                                            <a className="font-weight-bold font-xs btn-block text-muted small" href="#">View More <i className="fa fa-angle-right float-right font-lg"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>





                            <div className="col-md-6 col-lg-3">
                                <div className="card">
                                    <div className="p-0 clearfix">
                                        <i className="fa fa-cogs bg-primary p-4 font-2xl mr-3 float-left text-light"></i>
                                        <div className="h5 text-primary mb-0 pt-3">$1.999,50</div>
                                        <div className="text-muted text-uppercase font-weight-bold font-xs small">Income</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-md-6 col-lg-3">
                                <div className="card">
                                    <div className="card-body p-0 clearfix">
                                        <i className="fa fa-laptop bg-info p-4 font-2xl mr-3 float-left text-light"></i>
                                        <div className="h5 text-info mb-0 pt-3">$1.999,50</div>
                                        <div className="text-muted text-uppercase font-weight-bold font-xs small">Income</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-md-6 col-lg-3">
                                <div className="card">
                                    <div className="p-0 clearfix">
                                        <i className="fa fa-moon-o bg-warning p-4 font-2xl mr-3 float-left text-light"></i>
                                        <div className="h5 text-warning mb-0 pt-3">$1.999,50</div>
                                        <div className="text-muted text-uppercase font-weight-bold font-xs small">Income</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-md-6 col-lg-3">
                                <div className="card">
                                    <div className="p-0 clearfix">
                                        <i className="fa fa-bell bg-danger p-4 font-2xl mr-3 float-left text-light"></i>
                                        <div className="h5 text-danger mb-0 pt-3">$1.999,50</div>
                                        <div className="text-muted text-uppercase font-weight-bold font-xs small">Income</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-md-6 col-lg-3">
                                <div className="card">
                                    <div className="p-0 clearfix">
                                        <i className="fa fa-cogs bg-primary p-4 px-5 font-2xl mr-3 float-left text-light"></i>
                                        <div className="h5 text-primary mb-0 pt-3">$1.999,50</div>
                                        <div className="text-muted text-uppercase font-weight-bold font-xs small">Income</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-md-6 col-lg-3">
                                <div className="card">
                                    <div className="p-0 clearfix">
                                        <i className="fa fa-laptop bg-info p-4 px-5 font-2xl mr-3 float-left text-light"></i>
                                        <div className="h5 text-info mb-0 pt-3">$1.999,50</div>
                                        <div className="text-muted text-uppercase font-weight-bold font-xs small">Income</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-md-6 col-lg-3">
                                <div className="card">
                                    <div className="p-0 clearfix">
                                        <i className="fa fa-moon-o bg-warning p-4 px-5 font-2xl mr-3 float-left text-light"></i>
                                        <div className="h5 text-warning mb-0 pt-3">$1.999,50</div>
                                        <div className="text-muted text-uppercase font-weight-bold font-xs small">Income</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-md-6 col-lg-3">
                                <div className="card">
                                    <div className="p-0 clearfix">
                                        <i className="fa fa-bell bg-danger p-4 px-5 font-2xl mr-3 float-left text-light"></i>
                                        <div className="h5 text-danger mb-0 pt-3">$1.999,50</div>
                                        <div className="text-muted text-uppercase font-weight-bold font-xs small">Income</div>
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
                                            <strong><span className="count">894</span> k</strong>
                                            <span>followers</span>
                                        </li>
                                        <li>
                                            <strong><span className="count">92</span></strong>
                                            <span>circles</span>
                                        </li>
                                    </ul>
                                </div>
                                
                            </div>


                            <div className="col-sm-12 mb-4">
                                <div className="card-group">
                                    <div className="card col-md-6 no-padding ">
                                        <div className="card-body">
                                            <div className="h1 text-muted text-right mb-4">
                                                <i className="fa fa-users"></i>
                                            </div>

                                            <div className="h4 mb-0">
                                                <span className="count">87500</span>
                                            </div>

                                            <small className="text-muted text-uppercase font-weight-bold">Visitors</small>
                                            <div className="progress progress-xs mt-3 mb-0 bg-flat-color-1" style={{width: "40%", height: "5px"}}></div>
                                        </div>
                                    </div>
                                    <div className="card col-md-6 no-padding ">
                                        <div className="card-body">
                                            <div className="h1 text-muted text-right mb-4">
                                                <i className="fa fa-user-plus"></i>
                                            </div>
                                            <div className="h4 mb-0">
                                                <span className="count">385</span>
                                            </div>
                                            <small className="text-muted text-uppercase font-weight-bold">New Clients</small>
                                            <div className="progress progress-xs mt-3 mb-0 bg-flat-color-2" style={{width: "40%", height: "5px"}}></div>
                                        </div>
                                    </div>
                                    <div className="card col-md-6 no-padding ">
                                        <div className="card-body">
                                            <div className="h1 text-muted text-right mb-4">
                                                <i className="fa fa-cart-plus"></i>
                                            </div>
                                            <div className="h4 mb-0">
                                                <span className="count">1238</span>
                                            </div>
                                            <small className="text-muted text-uppercase font-weight-bold">Products sold</small>
                                            <div className="progress progress-xs mt-3 mb-0 bg-flat-color-3" style={{width: "40%", height: "5px"}}></div>
                                        </div>
                                    </div>
                                    <div className="card col-md-6 no-padding ">
                                        <div className="card-body">
                                            <div className="h1 text-muted text-right mb-4">
                                                <i className="fa fa-pie-chart"></i>
                                            </div>
                                            <div className="h4 mb-0">
                                                <span className="count">28</span>%
                                            </div>
                                            <small className="text-muted text-uppercase font-weight-bold">Returning Visitors</small>
                                            <div className="progress progress-xs mt-3 mb-0 bg-flat-color-4" style={{width: "40%", height: "5px"}}></div>
                                        </div>
                                    </div>
                                    <div className="card col-md-6 no-padding ">
                                        <div className="card-body">
                                            <div className="h1 text-muted text-right mb-4">
                                                <i className="fa fa-clock-o"></i>
                                            </div>
                                            <div className="h4 mb-0">5:34:11</div>
                                            <small className="text-muted text-uppercase font-weight-bold">Avg. Time</small>
                                            <div className="progress progress-xs mt-3 mb-0 bg-flat-color-5" style={{width: "40%", height: "5px"}}></div>
                                        </div>
                                    </div>
                                    <div className="card col-md-6 no-padding ">
                                        <div className="card-body">
                                            <div className="h1 text-muted text-right mb-4">
                                                <i className="fa fa-comments-o"></i>
                                            </div>
                                            <div className="h4 mb-0">
                                                <span className="count">972</span>
                                            </div>
                                            <small className="text-muted text-uppercase font-weight-bold">COMMENTS</small>
                                            <div className="progress progress-xs mt-3 mb-0 bg-flat-color-1" style={{width: "40%", height: "5px"}}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-sm-12 mb-4">
                                <div className="card-group">
                                    <div className="card col-lg-2 col-md-6 no-padding bg-flat-color-1">
                                        <div className="card-body">
                                            <div className="h1 text-muted text-right mb-4">
                                                <i className="fa fa-users text-light"></i>
                                            </div>

                                            <div className="h4 mb-0 text-light">
                                                <span className="count">87500</span>
                                            </div>
                                            <small className="text-uppercase font-weight-bold text-light">Visitors</small>
                                            <div className="progress progress-xs mt-3 mb-0 bg-light" style={{width: "40%", height: "5px"}}></div>
                                        </div>
                                    </div>
                                    <div className="card col-lg-2 col-md-6 no-padding no-shadow">
                                        <div className="card-body bg-flat-color-2">
                                            <div className="h1 text-muted text-right mb-4">
                                                <i className="fa fa-user-plus text-light"></i>
                                            </div>
                                            <div className="h4 mb-0 text-light">
                                                <span className="count">385</span>
                                            </div>
                                            <small className="text-uppercase font-weight-bold text-light">New Clients</small>
                                            <div className="progress progress-xs mt-3 mb-0 bg-light" style={{width: "40%", height: "5px"}}></div>
                                        </div>
                                    </div>
                                    <div className="card col-lg-2 col-md-6 no-padding no-shadow">
                                        <div className="card-body bg-flat-color-3">
                                            <div className="h1 text-right mb-4">
                                                <i className="fa fa-cart-plus text-light"></i>
                                            </div>
                                            <div className="h4 mb-0 text-light">
                                                <span className="count">1238</span>
                                            </div>
                                            <small className="text-light text-uppercase font-weight-bold">Products sold</small>
                                            <div className="progress progress-xs mt-3 mb-0 bg-light" style={{width: "40%", height: "5px"}}></div>
                                        </div>
                                    </div>
                                    <div className="card col-lg-2 col-md-6 no-padding no-shadow">
                                        <div className="card-body bg-flat-color-5">
                                            <div className="h1 text-right text-light mb-4">
                                                <i className="fa fa-pie-chart"></i>
                                            </div>
                                            <div className="h4 mb-0 text-light">
                                                <span className="count">28</span>%
                                            </div>
                                            <small className="text-uppercase font-weight-bold text-light">Returning Visitors</small>
                                            <div className="progress progress-xs mt-3 mb-0 bg-light" style={{width: "40%", height: "5px"}}></div>
                                        </div>
                                    </div>
                                    <div className="card col-lg-2 col-md-6 no-padding no-shadow">
                                        <div className="card-body bg-flat-color-4">
                                            <div className="h1 text-light text-right mb-4">
                                                <i className="fa fa-clock-o"></i>
                                            </div>
                                            <div className="h4 mb-0 text-light">5:34:11</div>
                                            <small className="text-light text-uppercase font-weight-bold">Avg. Time</small>
                                            <div className="progress progress-xs mt-3 mb-0 bg-light" style={{width: "40%", height: "5px"}}></div>
                                        </div>
                                    </div>
                                    <div className="card col-lg-2 col-md-6 no-padding no-shadow">
                                        <div className="card-body bg-flat-color-1">
                                            <div className="h1 text-light text-right mb-4">
                                                <i className="fa fa-comments-o"></i>
                                            </div>
                                            <div className="h4 mb-0 text-light">
                                                <span className="count">972</span>
                                            </div>
                                            <small className="text-light text-uppercase font-weight-bold">COMMENTS</small>
                                            <div className="progress progress-xs mt-3 mb-0 bg-light" style={{width: "40%", height: "5px"}}></div>
                                        </div>
                                    </div>
                                </div>

                            </div>


                            <div className="col-lg-4 col-md-6">
                                <aside className="profile-nav alt">
                                    <section className="card">
                                        <div className="card-header user-header alt bg-dark">
                                            <div className="media">
                                                <a href="#">
                                                    <img className="align-self-center rounded-circle mr-3" style={{width: "85px", height: "85px"}} alt="" src="images/admin.jpg" />
                                                </a>
                                                <div className="media-body">
                                                    <h2 className="text-light display-6">Jim Doe</h2>
                                                    <p>Project Manager</p>
                                                </div>
                                            </div>
                                        </div>


                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">
                                                <a href="#"> <i className="fa fa-envelope-o"></i> Mail Inbox <span className="badge badge-primary pull-right">10</span></a>
                                            </li>
                                            <li className="list-group-item">
                                                <a href="#"> <i className="fa fa-tasks"></i> Recent Activity <span className="badge badge-danger pull-right">15</span></a>
                                            </li>
                                            <li className="list-group-item">
                                                <a href="#"> <i className="fa fa-bell-o"></i> Notification <span className="badge badge-success pull-right">11</span></a>
                                            </li>
                                            <li className="list-group-item">
                                                <a href="#"> <i className="fa fa-comments-o"></i> Message <span className="badge badge-warning pull-right r-activity">03</span></a>
                                            </li>
                                            <li className="list-group-item">
                                                <a href="#"> <i className="fa fa-cog"></i> Settings</a>
                                            </li>
                                        </ul>

                                    </section>
                                </aside>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="card">
                                    <div className="card-header">
                                        <strong className="card-title mb-3">Profile Card</strong>
                                    </div>
                                    <div className="card-body">
                                        <div className="mx-auto d-block">
                                            <img className="rounded-circle mx-auto d-block" src="images/admin.jpg" alt="Card image cap" />
                                            <h5 className="text-sm-center mt-2 mb-1">Steven Lee</h5>
                                            <div className="location text-sm-center"><i className="fa fa-map-marker"></i> California, United States</div>
                                        </div>
                                        <hr/>
                                        <div className="card-text text-sm-center">
                                            <a href="#"><i className="fa fa-facebook pr-1"></i></a>
                                            <a href="#"><i className="fa fa-twitter pr-1"></i></a>
                                            <a href="#"><i className="fa fa-linkedin pr-1"></i></a>
                                            <a href="#"><i className="fa fa-pinterest pr-1"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <section className="card">
                                    <div className="twt-feed blue-bg">
                                        <div className="corner-ribon black-ribon">
                                            <i className="fa fa-twitter"></i>
                                        </div>
                                        <div className="fa fa-twitter wtt-mark"></div>

                                        <div className="media">
                                            <a href="#">
                                                <img className="align-self-center rounded-circle mr-3" style={{width: "85px", height: "85px"}} alt="" src="images/admin.jpg" />
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
                        </div>
                    </div>
                </div>

            </div>
        </React.Fragment>
    )
}