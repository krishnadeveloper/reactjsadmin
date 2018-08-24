import React from "react"
import LeftNav from "../Comman/LeftNav";
import Header from "../Comman/Header";
import Breacrumb from "../Comman/Breacrumb";
import {loadJsFiles} from "../includes/JsFunctions";

export default ()=>{
    loadJsFiles(
        [
            '/assets/js/lib/flot-chart/excanvas.min.js',
            '/assets/js/lib/flot-chart/jquery.flot.js',
            '/assets/js/lib/flot-chart/jquery.flot.pie.js',
            '/assets/js/lib/flot-chart/jquery.flot.time.js',
            '/assets/js/lib/flot-chart/jquery.flot.stack.js',
            '/assets/js/lib/flot-chart/jquery.flot.resize.js',
            '/assets/js/lib/flot-chart/jquery.flot.crosshair.js',
            '/assets/js/lib/flot-chart/curvedLines.js',
            '/assets/js/lib/flot-chart/flot-tooltip/jquery.flot.tooltip.min.js',
            '/assets/js/lib/flot-chart/flot-chart-init.js'
        ]
    )
    return(
        <React.Fragment>
            <LeftNav/>
            <div className="right-panel" id="right-panel">
                <Header />
                <Breacrumb />
                <div className="content mt-3">
                    <div className="animated fadeIn">


                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="mb-3">Real Chart</h4>
                                        <div className="flot-container">
                                            <div id="cpu-load" className="cpu-load"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="mb-3">Line Chart</h4>
                                        <div className="flot-container">
                                            <div id="flot-line" className="flot-line"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="mb-3">Pie Chart</h4>
                                        <div className="flot-container">
                                            <div id="flot-pie" className="flot-pie-container"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="mb-3">Line Chart</h4>
                                        <div className="flot-container">
                                            <div id="chart1" style={{width:"100%",height:"275px"}}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="mb-3">Bar Chart</h4>
                                        <div className="flot-container">
                                            <div id="flotBar" style={{width:"100%",height:"275px"}}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="mb-3">Bar Chart</h4>
                                        <div className="flot-container">
                                            <div id="flotCurve" style={{width:"100%",height:"275px"}}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}