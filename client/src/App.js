import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage";

import "./App.css";

const App = () => {
	return (
		<Router>
			<Switch>
				<Route path="/">
					<LandingPage />
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
