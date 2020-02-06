import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
	container: {
		display: "flex",
		flexDirection: "column",
		height: 350,
		maxWidth: 230,
		overflow: "hidden",
		cursor: "pointer",
		transition: "transform .2s",
		transform: "scale(1)",
		boxShadow: "none",
		"&:hover": {
			transform: "scale(1.05)",
			boxShadow:
				"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
		}
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
		padding: 15
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
