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
                        <div className="row">
                            <div className="col-md-4">
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


                            <div className="col-md-4">
                                <div className="card">
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
                                    <div className="card-footer">
                                        <strong className="card-title mb-3">Profile Card</strong>
                                    </div>
                                </div>
                            </div>



                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-header">
                                        <i className="fa fa-user"></i><strong className="card-title pl-2">Profile Card</strong>
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


                            <div className="col-md-4">
                                <aside className="profile-nav alt">
                                    <section className="card">
                                        <div className="card-header user-header alt bg-dark">
                                            <div className="media">
                                                <a href="#">
                                                    <img className="align-self-center rounded-circle mr-3" style={{width:"85px", height:"85px"}} alt="" src="images/admin.jpg" />
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
                                        </ul>

                                    </section>
                                </aside>
                            </div>

                            <div className="col-md-4">
                                <div className="feed-box text-center">
                                    <section className="card">
                                        <div className="card-body">
                                            <div className="corner-ribon blue-ribon">
                                                <i className="fa fa-twitter"></i>
                                            </div>
                                            <a href="#">
                                                <img className="align-self-center rounded-circle mr-3" style={{width:"85px", height:"85px"}} alt="" src="images/admin.jpg" />
                                            </a>
                                            <h2>Kanye West</h2>
                                            <p>Just got a pretty neat project via <a href="#">@ooomf</a> - Give it a try <a href="#">http://t.co/e02DwGEeOJ</a></p>
                                        </div>
                                    </section>
                                </div>
                            </div>



                            <div className="col-md-4">
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



                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-header">
                                        <strong className="card-title">Card with switch</strong>
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-header">
                                        <strong className="card-title">Card with Label <small><span className="badge badge-success float-right mt-1">Success</span></small></strong>
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-header">
                                        <strong className="card-title">Card with Label <small><span className="badge badge-danger float-right mt-1">49</span></small></strong>
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>



                            <div className="col-md-4">
                                <div className="card border border-primary">
                                    <div className="card-header">
                                        <strong className="card-title">Card Outline</strong>
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>


                            <div className="col-md-4">
                                <div className="card border border-secondary">
                                    <div className="card-header">
                                        <strong className="card-title">Card Outline</strong>
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>


                            <div className="col-md-4">
                                <div className="card border border-success">
                                    <div className="card-header">
                                        <strong className="card-title">Card Outline</strong>
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>



                            <div className="col-md-4">
                                <div className="card bg-danger">
                                    <div className="card-body">
                                        <blockquote className="blockquote mb-0">
                                            <p className="text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                            <footer className="blockquote-footer text-light">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="card bg-warning">
                                    <div className="card-body">
                                        <blockquote className="blockquote mb-0 text-light">
                                            <p className="text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                            <footer className="blockquote-footer text-light">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="card bg-primary">
                                    <div className="card-body">
                                        <blockquote className="blockquote mb-0 text-light">
                                            <p className="text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                            <footer className="blockquote-footer text-light">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-header bg-secondary">
                                        <strong className="card-title text-light">Card Header</strong>
                                    </div>
                                    <div className="card-body text-white bg-primary">
                                        <p className="card-text text-light">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-header bg-dark">
                                        <strong className="card-title text-light">Card Header</strong>
                                    </div>
                                    <div className="card-body text-white bg-danger">
                                        <p className="card-text text-light">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-header bg-success">
                                        <strong className="card-title text-light">Card Header</strong>
                                    </div>
                                    <div className="card-body text-white bg-warning">
                                        <p className="card-text text-light">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>


                            <div className="col-md-4">
                                <div className="card">
                                    <img className="card-img-top" src="images/placeholder.png" alt="Card image cap" />
                                    <div className="card-body">
                                        <h4 className="card-title mb-3">Card Image Title</h4>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card">
                                    <img className="card-img-top" src="images/placeholder.png" alt="Card image cap" />
                                    <div className="card-body">
                                        <h4 className="card-title mb-3">Card Image Title</h4>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card">
                                    <img className="card-img-top" src="images/placeholder.png" alt="Card image cap" />
                                    <div className="card-body">
                                        <h4 className="card-title mb-3">Card Image Title</h4>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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