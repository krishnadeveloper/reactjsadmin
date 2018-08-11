import React, {Component} from "react";
import Header from "./Comman/Header";
import Footer from "./Comman/Footer";
import LeftNav from "./Comman/LeftNav";


class Home extends Component{
    render(){
        return(
            <div>
                <h1>Home</h1>
            <Header />
            <LeftNav />
            <Footer />
            </div>
        );
    };
};


export default Home;
