import {Route} from "react-router-dom";

const PrivateRoute = ({component}) => {
    return(
        <Route>
            {component}
        </Route>
    )
}