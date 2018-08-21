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
                
            </div>
        </React.Fragment>
    )
}