import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

import Dashboard from "../screens/Dashboard/Dashboard";

import Loader from "../components/Loader/Loader";

const ArticleDetails = React.lazy(() =>
	import("../screens/ArticleDetails/ArticleDetails")
);

const MainRoute = () => (
	<Router>
		<React.Suspense fallback={<Loader />}>
			<Switch>
				<Route exact path="/" component={Dashboard} />
				<Route exact path="/article/*" component={ArticleDetails} />
			</Switch>
		</React.Suspense>
	</Router>
);

export default MainRoute;
