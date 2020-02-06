import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
	container: {
		width: "90%",
		minHeight: "100vh",
		maxWidth: 1100,
		margin: "0 auto",
		"& h1": {
			marginLeft: 15
		}
	},
	articles: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "center"
	},
	articleContainer: {
		margin: 10
	},
	error: {}
});
