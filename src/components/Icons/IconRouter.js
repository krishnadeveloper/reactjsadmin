import React from "react"
import {Switch,Route} from "react-router-dom"
import Fontawesome from "./Fontawesome";
import ThemefyIcon from "./ThemefyIcon";

export default ({match})=>{
    return(
        <Switch>
            <Route path={match.url+"/font-fontawesome"} component={Fontawesome} />
            <Route path={match.url+"/font-themify"} component={ThemefyIcon} />
        </Switch>
    )
}
