import React from "react"
import LeftNav from "../Comman/LeftNav";
import Header from "../Comman/Header";
import Breacrumb from "../Comman/Breacrumb";
import {loadJsFile} from "../includes/JsFunctions"
export default ()=>{
    loadJsFile('/assets/js/lib/chart-js/chartjs-init.js')
    //loadJsFiles('Chart.bundle.js')
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
                                        <h4 className="mb-3">Yearly Sales </h4>
                                        <canvas id="sales-chart"></canvas>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="mb-3">Team Commits </h4>
                                        <canvas id="team-chart"></canvas>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="mb-3">Bar chart </h4>
                                        <canvas id="barChart"></canvas>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="mb-3">Rader chart </h4>
                                        <canvas id="radarChart"></canvas>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="mb-3">Line Chart </h4>
                                        <canvas id="lineChart"></canvas>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="mb-3">Doughut Chart </h4>
                                            <canvas id="doughutChart"></canvas>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="mb-3">Pie Chart </h4>
                                        <canvas id="pieChart"></canvas>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="mb-3">Polar Chart </h4>
                                        <canvas id="polarChart"></canvas>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="mb-3">Single Bar Chart </h4>
                                        <canvas id="singelBarChart"></canvas>
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