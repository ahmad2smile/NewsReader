import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
	container: {
		display: "flex",
		flexDirection: "column",
		height: 350,
		maxWidth: 200,
		overflow: "hidden"
	},
	imgContainer: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "center",
		color: "transparent",
		minHeight: 120,
		"& img:before": {
			content: "' '",
			display: "block",
			height: 120,
			background: "center / contain no-repeat url(logo512.png)"
		}
	},
	detailsContainer: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		flexGrow: 3,
		margin: "10px 0"
	},
	title: {
		margin: 0,
		display: "-webkit-box",
		"-webkit-line-clamp": 3,
		"-webkit-box-orient": "vertical",
		overflow: "hidden"
	},
	description: {
		margin: "3px 0",
		fontSize: 14,
		display: "-webkit-box",
		"-webkit-line-clamp": 4,
		"-webkit-box-orient": "vertical",
		overflow: "hidden"
	},
	links: {
		display: "flex",
		justifyContent: "space-between"
	},
	details: {}
});
