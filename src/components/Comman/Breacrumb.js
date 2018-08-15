import React from "react";
import {NavLink} from "react-router-dom";

export default ()=>{
    return(
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
                            <li><NavLink to="/">Dashboard</NavLink></li>
                            <li><NavLink to="javascript:;">UI Elements</NavLink></li>
                            <li className="active">Badges</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
};