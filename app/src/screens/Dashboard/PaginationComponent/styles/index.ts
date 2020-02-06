import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
	container: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center"
	},
	btnContainer: {
		paddingBottom: 20
	},
	btn: {
		height: 35,
		width: 45,
		boxShadow: "0 6px 10px 0 rgba(0, 0, 0 , .1)",
		backgroundColor: "#575757",
		color: "#fff",
		border: "none",
		"&:disabled": {
			backgroundColor: "#888888"
		}
	}
});
