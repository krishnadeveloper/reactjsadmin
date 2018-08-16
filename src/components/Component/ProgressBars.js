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
                
            </div>
        </div>
    )
}