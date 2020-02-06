import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
	container: {
		width: "90%",
		margin: "0 auto"
	},
	searchContainer: {},
	textField: {
		height: 60,
		width: "calc(100% - 20px)",
		background: "#fff",
		boxShadow: "0 6px 10px 0 rgba(0, 0, 0 , .1)",
		border: 0,
		outline: 0,
		padding: "0 10px",
		fontSize: 16
	}
});
