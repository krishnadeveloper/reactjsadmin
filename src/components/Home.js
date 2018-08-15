import React, {Component} from "react";
import Header from "./Comman/Header";
//import Footer from "./Comman/Footer";
import Dashboard from "./Dashboard";
import LeftNav from "./Comman/LeftNav";
import Breacrumb from "./Comman/Breacrumb";


class Home extends Component{
    render(){
        return(
            <div>
                <LeftNav />
                <div id="right-panel" className="right-panel">
                    <Header />
                    <Breacrumb />
                    <Dashboard />
                </div>
            
                {/* <Footer /> */}
            </div>
        );
    };
};


export default Home;
