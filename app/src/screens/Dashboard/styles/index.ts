import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
	container: {
		width: "90%",
		margin: "0 auto"
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
