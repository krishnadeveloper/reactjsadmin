import React from "react"
import Header from "./Header";
import Breacrumb from "./Breacrumb";
import LeftNav from "./LeftNav";

export default ()=>{
    return(
        <div>
            <LeftNav />
            <div id="right-panel" className="right-panel">
                <Header />
                <Breacrumb />
                <div className="content mt-3">
                    <div className="animated">
                        <h1>Opps</h1> Page not found.
                    </div>
                </div>
            </div>
        </div>
    )
}