import React from "react"
import {BrowserRouter,Route,Switch} from "react-router-dom"
import Basic from "./Basic";
import Advance from "./Advance";

export default ({match}) => {
    
    return(
        <BrowserRouter>
            <Switch>
                <Route path={match.url+"/basic"} component={Basic} />
                <Route path={match.url+"/advanced"} component={Advance}/>
            </Switch>
        </BrowserRouter>
    )
}