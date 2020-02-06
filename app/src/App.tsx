import React from "react";
import Dashboard from "./screens/Dashboard/Dashboard";

import { useStyles } from "./App.styles";

const App = () => {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<h1>News Reader</h1>
			<Dashboard />
		</div>
	);
};

export default App;
