import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
	container: {
		"& h1": {
			marginLeft: 15
		}
	},
	"@global": {
		".selectContainer": {
			display: "flex",
			justifyContent: "flex-end",
			alignItems: "center",
			margin: "10px 0",
			"& select": {
				width: 100,
				height: 35,
				border: "none",
				fontSize: 16,
				textAlign: "center"
			}
		}
	}
});
