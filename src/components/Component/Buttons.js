import React, {Component} from "react";
import LeftNav from "../Comman/LeftNav";
import Header from "../Comman/Header";

class Buttons extends Component{
    render(){
        return(
            <div>
                <LeftNav />
                <div id="right-panel" className="right-panel">
                    <Header />
                    <div className="breadcrumbs">
                        <div className="col-sm-4">
                            <div className="page-header float-left">
                                <div className="page-title">
                                    <h1>Dashboard</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-8">
                            <div className="page-header float-right">
                                <div className="page-title">
                                    <ol className="breadcrumb text-right">
                                        <li><a href="#">Dashboard</a></li>
                                        <li><a href="#">UI Elements</a></li>
                                        <li className="active">Badges</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="content mt-3">
                        <div className="animated fadeIn">
                            <div className="row">

                                <div className="badges">
                                    <div className="col-lg-6">

                                        <div className="card">
                                            <div className="card-header">
                                                <strong>Badges</strong>
                                                <small>Use <code>.badge</code> className within <code>&lt;span&gt;</code> elements to create badges:
                                                </small>
                                            </div>
                                            <div className="card-body">

                                                <a href="#">News <span className="badge badge-primary">5</span></a>
                                                <br/>
                                                <a href="#">Comments <span className="badge badge-warning">10</span></a>
                                                <br/>
                                                <a href="#">Updates <span className="badge badge-success">2</span></a>
                                            </div>
                                        </div>


                                        <div className="card">
                                            <div className="card-header">
                                                <strong>Labels</strong>
                                            </div>
                                            <div className="card-body">
                                                <p className="text-muted m-b-15">Use the <code>.label</code> className,&nbsp; followed by one of the six contextual classes <code>.label-default</code>, <code>.label-primary</code>, <code>.label-success</code>,
                                                    <code>.label-info</code>, <code>.label-warning</code> or <code>.label-danger</code>, within a <code>&lt;span&gt;</code> element to create a label:</p>

                                                    <h1>Example heading <span className="badge badge-secondary">New</span></h1>
                                                    <h2>Example heading <span className="badge badge-secondary">New</span></h2>
                                                    <h3>Example heading <span className="badge badge-secondary">New</span></h3>
                                                    <h4>Example heading <span className="badge badge-secondary">New</span></h4>
                                                    <h5>Example heading <span className="badge badge-secondary">New</span></h5>
                                                    <h6>Example heading <span className="badge badge-secondary">New</span></h6>
                                            </div>
                                        </div>

                                    </div>


                                    <div className="col-lg-6">
                                        <div className="card">
                                            <div className="card-header">
                                                <strong>Badges  in Buttons</strong>
                                            </div>
                                            <div className="card-body">
                                                <p className="text-muted m-b-15">Use the <code>.badge</code> className within <code>&lt;span&gt;</code> elements to create badges:</p>

                                                <button type="button" className="btn btn-primary m-l-10 m-b-10">Primary <span className="badge badge-light">7</span></button>
                                                <button type="button" className="btn btn-success m-l-10 m-b-10">Success <span className="badge badge-light">7</span></button>
                                                <button type="button" className="btn btn-info m-l-10 m-b-10">Info <span className="badge badge-light">7</span></button>
                                                <button type="button" className="btn btn-warning m-l-10 m-b-10">Warning <span className="badge badge-light">7</span></button>
                                                <button type="button" className="btn btn-danger m-l-10 m-b-10">Danger <span className="badge badge-light">7</span></button>
                                            </div>
                                        </div>

                                        <div className="card">
                                            <div className="card-header">
                                                <strong>Labels</strong>
                                            </div>
                                            <div className="card-body">
                                                <p className="text-muted m-b-15">Use the <code>.label</code> className,&nbsp; followed by one of the six contextual classes <code>.label-default</code>, <code>.label-primary</code>, <code>.label-success</code>,
                                                    <code>.label-info</code>, <code>.label-warning</code> or <code>.label-danger</code>, within a <code>&lt;span&gt;</code> element to create a label:</p>

                                                    <span className="badge badge-primary">Primary</span>
                                                    <span className="badge badge-secondary">Secondary</span>
                                                    <span className="badge badge-success">Success</span>
                                                    <span className="badge badge-danger">Danger</span>
                                                    <span className="badge badge-warning">Warning</span>
                                                    <span className="badge badge-info">Info</span>
                                                    <span className="badge badge-light">Light</span>
                                                    <span className="badge badge-dark">Dark</span>


                                                </div>
                                            </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    
                </div>

            </div>
            
        );
    };
};

export default Buttons;