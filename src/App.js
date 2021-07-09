import Authorization from "./pages/Authorization/Authorization";
import Publications from "./pages/Publications/Publications";
import Groups from "./pages/Groups/Groups";
import Users from "./pages/Users/Users";
import Error from "./pages/Error/Error";
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import {Provider} from 'react-redux';
import store from './redux/store/store'
import BuilderPost from "./pages/BuilderPost/BuilderPost";
import Registration from "./pages/Registration/Registration";



function App() {
	return (
		<Provider store={store}>
			<Router>
				<Switch>
					<Route path="/authorization">
						<Authorization/>
					</Route>
					<Route path = "registration"/>
					<Route path="/registration/:guid" children = {<Registration/>} />
					<Route path="/publications">
						<Publications/>
					</Route>
					<Route path= "/builderPost/:userId/:postId" children = {<BuilderPost />} />
					<Route path="/groups">
						<Groups/>
					</Route>
					<Route path="/builderPost">
						<BuilderPost />
					</Route>
					<Route path="/users">
						<Users />
					</Route>
					<Route path="/error">
						<Error code="504" errorContent="Not found"/>
					</Route>
				</Switch>
			</Router>
		</Provider>
	);
}

export default App;
