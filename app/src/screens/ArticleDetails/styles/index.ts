import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
	container: {
		width: "90%",
		minHeight: "100vh",
		maxWidth: 1100,
		margin: "0 auto"
	},
	backButton: {
		display: "flex",
		justifyContent: "left",
		alignItems: "center"
	},
	imgContainer: {
		display: "flex",
		justifyContent: "center",
		"& img": {
			maxHeight: 300
		}
	},
	articleBody: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "center",
		textAlign: "left",
		"& img": {
			width: "100%"
		}
	},
	error: {}
});
