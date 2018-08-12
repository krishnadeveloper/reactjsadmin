import React, {Component} from "react";
import Header from "./Comman/Header";
//import Footer from "./Comman/Footer";
import Dashboard from "./Dashboard";
import LeftNav from "./Comman/LeftNav";


class Home extends Component{
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
                                        <li className="active">Dashboard</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Dashboard />
                    
                </div>
            
                {/* <Footer /> */}
            </div>
        );
    };
};


export default Home;
