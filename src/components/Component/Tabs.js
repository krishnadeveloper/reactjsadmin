import React,{Component} from "react";
import {NavLink} from "react-router-dom";
import LeftNav from "../Comman/LeftNav";
import Header from "../Comman/Header";
import Breadcrumb from "../Comman/Breacrumb";

class Tabs extends Component{
    render(){
        return(
            <div>
                <LeftNav />
                <div id="right-panel" className="right-panel">
                    <Header />
                    <Breadcrumb />
                    <div className="content mt-3">
                            <div className="animated fadeIn">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="card">
                                            <div className="card-header">
                                                <h4>Menus</h4>
                                            </div>
                                            <div className="card-body">
                                                <p className="text-muted m-b-15">In HTML, a menu is often defined in an unordered list <code>&lt;ul&gt;</code> (and styled afterwards), like this:</p>

                                                <ul className="list-unstyled">
                                                    <li><NavLink to="#">Home</NavLink></li>
                                                    <li><NavLink to="#">Menu 1</NavLink></li>
                                                    <li><NavLink to="#">Menu 2</NavLink></li>
                                                    <li><NavLink to="#">Menu 3</NavLink></li>
                                                </ul>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="card">
                                            <div className="card-header">
                                                <h4>Inline List</h4>
                                            </div>
                                            <div className="card-body">
                                                <p className="text-muted m-b-15">In HTML, a menu is often defined in an unordered list <code>&lt;ul&gt;</code> (and styled afterwards), like this:</p>

                                                <ul className="list-inline">
                                                    <li className="list-inline-item"><NavLink to="#">Home</NavLink></li>
                                                    <li className="list-inline-item"><NavLink to="#">Menu 1</NavLink></li>
                                                    <li className="list-inline-item"><NavLink to="#">Menu 2</NavLink></li>
                                                    <li className="list-inline-item"><NavLink to="#">Menu 3</NavLink></li>
                                                </ul>

                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="card">
                                            <div className="card-header">
                                                <h4>Tabs With Dropdown Menu</h4>
                                            </div>
                                            <div className="card-body">
                                                <p className="text-muted m-b-15">The following example adds a dropdown menu to "Menu 1":</p>

                                                <ul className="nav nav-tabs">
                                                    <li className="nav-item">
                                                        <NavLink className="nav-link active" to="#">Home</NavLink>
                                                    </li>
                                                    <li className="nav-item dropdown">
                                                        <NavLink className="nav-link dropdown-toggle" data-toggle="dropdown" to="#" role="button" aria-haspopup="true" aria-expanded="false">Menu 1 <span className="caret"></span></NavLink>
                                                        <div className="dropdown-menu">
                                                          <NavLink className="dropdown-item" to="#">Submenu 1-1</NavLink>
                                                          <NavLink className="dropdown-item" to="#">Submenu 1-2</NavLink>
                                                          <NavLink className="dropdown-item" to="#">Submenu 1-3</NavLink>
                                                      </div>
                                                  </li>
                                                  <li className="nav-item">
                                                    <NavLink className="nav-link" to="#">Menu 2</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink className="nav-link" to="#">Menu 3</NavLink>
                                                </li>
                                            </ul>

                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-lg-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4>Pills</h4>
                                        </div>
                                        <div className="card-body">
                                            <p className="text-muted m-b-15">Pills are created with <code>&lt;ul className="nav nav-pills"&gt;</code>. Also mark the current page with
                                                <code>&lt;li className="active"&gt;</code>:</p>

                                                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                                    <li className="nav-item">
                                                        <NavLink className="nav-link active" id="pills-home-tab" data-toggle="pill" to="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Home</NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink className="nav-link" id="pills-profile-tab" data-toggle="pill" to="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink className="nav-link" id="pills-contact-tab" data-toggle="pill" to="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</NavLink>
                                                    </li>
                                                </ul>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="card">
                                            <div className="card-header">
                                                <h4>Vertical Pills</h4>
                                            </div>
                                            <div className="card-body">
                                                <p className="text-muted m-b-15">Pills can also be displayed vertically. Just add the <code>.nav-stacked</code> className:</p>

                                                <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                                  <NavLink className="nav-link active" id="v-pills-home-tab" data-toggle="pill" to="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</NavLink>
                                                  <NavLink className="nav-link" id="v-pills-profile-tab" data-toggle="pill" to="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Menu 1</NavLink>
                                                  <NavLink className="nav-link" id="v-pills-messages-tab" data-toggle="pill" to="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Menu 2</NavLink>
                                                  <NavLink className="nav-link" id="v-pills-settings-tab" data-toggle="pill" to="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Menu 3</NavLink>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  
                                  <div className="col-lg-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4>Pills With Dropdown Menu</h4>
                                        </div>
                                        <div className="card-body">
                                            <p className="text-muted m-b-15">The following example adds a dropdown menu to "Menu 1":</p>

                                            <ul className="nav nav-pills">
                                                <li className="nav-item">
                                                    <NavLink className="nav-link active" to="#">Home</NavLink>
                                                </li>
                                                <li className="nav-item dropdown">
                                                    <NavLink className="nav-link dropdown-toggle" data-toggle="dropdown" to="#" role="button" aria-haspopup="true" aria-expanded="false">Menu 1</NavLink>
                                                    <div className="dropdown-menu">
                                                        <NavLink className="dropdown-item" to="#">Submenu 1-1</NavLink>
                                                        <NavLink className="dropdown-item" to="#">Submenu 1-2</NavLink>
                                                        <NavLink className="dropdown-item" to="#">Submenu 1-3</NavLink>
                                                        <NavLink className="dropdown-item" to="#">Something else here</NavLink>
                                                        <div className="dropdown-divider"></div>
                                                        <NavLink className="dropdown-item" to="#">Separated link</NavLink>
                                                    </div>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink className="nav-link" to="#">Menu 2</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink className="nav-link" to="#">Menu 3</NavLink>
                                                </li>
                                            </ul>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4>Centered Tabs and Pills</h4>
                                        </div>
                                        <div className="card-body">
                                            <p className="text-muted m-b-15">To center/justify the tabs and pills, use the <code>.nav-justified</code> className.</p>

                                            
                                            <ul className="nav nav-tabs nav-justified">
                                                <li className="nav-item">
                                                    <NavLink className="nav-link active" to="#">Home</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink className="nav-link" to="#">Menu 1</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink className="nav-link" to="#">Menu 2</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink className="nav-link" to="#">Menu 3</NavLink>
                                                </li>
                                            </ul>

                                            <ul className="nav nav-pills nav-justified mb-3 mt-2" id="pills-tab" role="tablist">
                                                <li className="nav-item">
                                                    <NavLink className="nav-link active" id="pills-home-tab" data-toggle="pill" to="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Home</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink className="nav-link" id="pills-profile-tab" data-toggle="pill" to="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Menu 1</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink className="nav-link" id="pills-profile-tab" data-toggle="pill" to="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Menu 2</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink className="nav-link" id="pills-contact-tab" data-toggle="pill" to="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Menu 3</NavLink>
                                                </li>
                                            </ul>


                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4>Toggleable / Dynamic Tabs</h4>
                                        </div>
                                        <div className="card-body">
                                            <p className="text-muted m-b-15">To make the tabs toggleable, add the <code>data-toggle="tab"</code> attribute to each link. Then add a <code>.tab-pane</code> className with a unique ID for every tab and wrap them inside a
                                                <code>&lt;div&gt;</code> element with className <code>.tab-content</code>. If you want the tabs to fade in and out when clicking on them, add the <code>.fade</code> className to <code>.tab-pane</code>:</p>

                                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                                    <li className="nav-item">
                                                        <NavLink className="nav-link active" id="home-tab" data-toggle="tab" to="#home" role="tab" aria-controls="home" aria-selected="true">Home</NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink className="nav-link" id="profile-tab" data-toggle="tab" to="#profile" role="tab" aria-controls="profile" aria-selected="false">Menu 1</NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink className="nav-link" id="contact-tab" data-toggle="tab" to="#contact" role="tab" aria-controls="contact" aria-selected="false">Menu 2</NavLink>
                                                    </li>
                                                </ul>
                                                <div className="tab-content pl-3 p-1" id="myTabContent">
                                                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                                        <h3>Home</h3>
                                                        <p>Some content here.</p>
                                                    </div>
                                                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                                        <h3>Menu 1</h3>
                                                        <p>Some content here.</p>
                                                    </div>
                                                    <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                                        <h3>Menu 2</h3>
                                                        <p>Some content here.</p>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="card">
                                            <div className="card-header">
                                                <h4>Default Tab</h4>
                                            </div>
                                            <div className="card-body">
                                                <div className="default-tab">
                                                    <nav>
                                                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                                            <NavLink className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" to="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Home</NavLink>
                                                            <NavLink className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" to="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</NavLink>
                                                            <NavLink className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" to="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</NavLink>
                                                        </div>
                                                    </nav>
                                                    <div className="tab-content pl-3 pt-2" id="nav-tabContent">
                                                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                                            <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, irure terry richardson ex sd. Alip placeat salvia cillum iphone. Seitan alip s cardigan american apparel, butcher voluptate nisi .</p>
                                                        </div>
                                                        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                                            <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, irure terry richardson ex sd. Alip placeat salvia cillum iphone. Seitan alip s cardigan american apparel, butcher voluptate nisi .</p>
                                                        </div>
                                                        <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                                                            <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, irure terry richardson ex sd. Alip placeat salvia cillum iphone. Seitan alip s cardigan american apparel, butcher voluptate nisi .</p>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="card">
                                            <div className="card-header">
                                                <h4>Custom Tab</h4>
                                            </div>
                                            <div className="card-body">
                                                <div className="custom-tab">

                                                    <nav>
                                                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                                            <NavLink className="nav-item nav-link active" id="custom-nav-home-tab" data-toggle="tab" to="#custom-nav-home" role="tab" aria-controls="custom-nav-home" aria-selected="true">Home</NavLink>
                                                            <NavLink className="nav-item nav-link" id="custom-nav-profile-tab" data-toggle="tab" to="#custom-nav-profile" role="tab" aria-controls="custom-nav-profile" aria-selected="false">Profile</NavLink>
                                                            <NavLink className="nav-item nav-link" id="custom-nav-contact-tab" data-toggle="tab" to="#custom-nav-contact" role="tab" aria-controls="custom-nav-contact" aria-selected="false">Contact</NavLink>
                                                        </div>
                                                    </nav>
                                                    <div className="tab-content pl-3 pt-2" id="nav-tabContent">
                                                        <div className="tab-pane fade show active" id="custom-nav-home" role="tabpanel" aria-labelledby="custom-nav-home-tab">
                                                            <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, irure terry richardson ex sd. Alip placeat salvia cillum iphone. Seitan alip s cardigan american apparel, butcher voluptate nisi .</p>
                                                        </div>
                                                        <div className="tab-pane fade" id="custom-nav-profile" role="tabpanel" aria-labelledby="custom-nav-profile-tab">
                                                            <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, irure terry richardson ex sd. Alip placeat salvia cillum iphone. Seitan alip s cardigan american apparel, butcher voluptate nisi .</p>
                                                        </div>
                                                        <div className="tab-pane fade" id="custom-nav-contact" role="tabpanel" aria-labelledby="custom-nav-contact-tab">
                                                            <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, irure terry richardson ex sd. Alip placeat salvia cillum iphone. Seitan alip s cardigan american apparel, butcher voluptate nisi .</p>
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
            </div>
        )
    }
}

export default Tabs;