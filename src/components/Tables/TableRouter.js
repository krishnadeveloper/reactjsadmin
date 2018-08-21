import React,{Component} from "react"
import {Switch,Route} from "react-router-dom"
import BasicTable from "./BasicTable";
import DataTable from "./DataTable";

// Routing without class

// export default ({match}) =>{
//     return(
//         <BrowserRouter>
//             <Switch>
//                 <Route path={match.url+"/tables-basic"} component={BasicTable} />
//                 <Route path="/tables-data"  component={DataTable} />
//             </Switch>
//         </BrowserRouter>
//     )
// }

// Class based routing

let match;
class TableRouter extends Component{
    constructor(props){
        super(props);
        match = props.match;
    }
    render(){
        return(
            
             <Switch>
                <Route path={match.url+"/tables-basic"} component={BasicTable} />
                <Route path={match.url+"/tables-data"}  component={DataTable} />
             </Switch>
        )
    }
}

export default TableRouter;