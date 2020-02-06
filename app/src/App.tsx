import React from "react";

import { useStyles } from "./App.styles";
import MainRoute from "./navigation/routes";

const App = () => {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<MainRoute />
		</div>
	);
};

export default App;
