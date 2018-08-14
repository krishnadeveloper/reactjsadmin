import React from "react";
import {NavLink} from "react-router-dom";

export default () => {
        return(
            <aside id="left-panel" className="left-panel">
                <nav className="navbar navbar-expand-sm navbar-default">

                    <div className="navbar-header">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-menu" aria-controls="main-menu" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fa fa-bars"></i>
                        </button>
                        <a className="navbar-brand" href="#"><img src={"/images/logo.png"} alt="Logo" /></a>
                        <a className="navbar-brand hidden" href="#"><img src={"images/logo2.png"} alt="Logo" /></a>
                    </div>

                    <div id="main-menu" className="main-menu collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li className="active">
                                <NavLink to=""><i className="menu-icon fa fa-dashboard"></i>Dashboard</NavLink>
    
                            </li>
                            <h3 className="menu-title">UI elements</h3>
                            <li className="menu-item-has-children dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-laptop"></i>Components</a>
                                <ul className="sub-menu children dropdown-menu">
                                    <li><i className="fa fa-puzzle-piece"></i> <NavLink to="/ui-buttons">Buttons</NavLink></li>
                                    <li><i className="fa fa-id-badge"></i><NavLink to="ui-badges.html">Badges</NavLink></li>
                                    <li><i className="fa fa-bars"></i><NavLink to="ui-tabs.html">Tabs</NavLink></li>
                                    <li><i className="fa fa-share-square-o"></i><NavLink to="ui-social-buttons.html">Social Buttons</NavLink></li>
                                    <li><i className="fa fa-id-card-o"></i><NavLink to="ui-cards.html">Cards</NavLink></li>
                                    <li><i className="fa fa-exclamation-triangle"></i><NavLink to="ui-alerts.html">Alerts</NavLink></li>
                                    <li><i className="fa fa-spinner"></i><NavLink to="ui-progressbar.html">Progress Bars</NavLink></li>
                                    <li><i className="fa fa-fire"></i><NavLink to="ui-modals.html">Modals</NavLink></li>
                                    <li><i className="fa fa-book"></i><NavLink to="ui-switches.html">Switches</NavLink></li>
                                    <li><i className="fa fa-th"></i><NavLink to="ui-grids.html">Grids</NavLink></li>
                                    <li><i className="fa fa-file-word-o"></i><NavLink to="ui-typgraphy.html">Typography</NavLink></li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-table"></i>Tables</a>
                                <ul className="sub-menu children dropdown-menu">
                                    <li><i className="fa fa-table"></i><a href="tables-basic.html">Basic Table</a></li>
                                    <li><i className="fa fa-table"></i><a href="tables-data.html">Data Table</a></li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-th"></i>Forms</a>
                                <ul className="sub-menu children dropdown-menu">
                                    <li><i className="menu-icon fa fa-th"></i><a href="forms-basic.html">Basic Form</a></li>
                                    <li><i className="menu-icon fa fa-th"></i><a href="forms-advanced.html">Advanced Form</a></li>
                                </ul>
                            </li>

                            <h3 className="menu-title">Icons</h3>

                            <li className="menu-item-has-children dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-tasks"></i>Icons</a>
                                <ul className="sub-menu children dropdown-menu">
                                    <li><i className="menu-icon fa fa-fort-awesome"></i><a href="font-fontawesome.html">Font Awesome</a></li>
                                    <li><i className="menu-icon ti-themify-logo"></i><a href="font-themify.html">Themefy Icons</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="widgets.html"> <i className="menu-icon ti-email"></i>Widgets </a>
                            </li>
                            <li className="menu-item-has-children dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-bar-chart"></i>Charts</a>
                                <ul className="sub-menu children dropdown-menu">
                                    <li><i className="menu-icon fa fa-line-chart"></i><a href="charts-chartjs.html">Chart JS</a></li>
                                    <li><i className="menu-icon fa fa-area-chart"></i><a href="charts-flot.html">Flot Chart</a></li>
                                    <li><i className="menu-icon fa fa-pie-chart"></i><a href="charts-peity.html">Peity Chart</a></li>
                                </ul>
                            </li>

                            <li className="menu-item-has-children dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-area-chart"></i>Maps</a>
                                <ul className="sub-menu children dropdown-menu">
                                    <li><i className="menu-icon fa fa-map-o"></i><a href="maps-gmap.html">Google Maps</a></li>
                                    <li><i className="menu-icon fa fa-street-view"></i><a href="maps-vector.html">Vector Maps</a></li>
                                </ul>
                            </li>
                            <h3 className="menu-title">Extras</h3>
                            <li className="menu-item-has-children dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-glass"></i>Pages</a>
                                <ul className="sub-menu children dropdown-menu">
                                    <li><i className="menu-icon fa fa-sign-in"></i><a href="page-login.html">Login</a></li>
                                    <li><i className="menu-icon fa fa-sign-in"></i><a href="page-register.html">Register</a></li>
                                    <li><i className="menu-icon fa fa-paper-plane"></i><a href="pages-forget.html">Forget Pass</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </aside>
        );
}