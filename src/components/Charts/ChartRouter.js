import React from "react"
import {Switch,Route} from "react-router-dom"
import Chartsjs from "./Chartsjs";
import Floatchart from "./Floatchart";
import Peity from "./Peity";


export default ({match})=>{
    return(
        <Switch>
            <Route path={match.url+"/chartjs"} component={Chartsjs} />
            <Route path={match.url+"/flot"} component={Floatchart} />
            <Route path={match.url+"/peity"} component={Peity} />
        </Switch>
    )
}