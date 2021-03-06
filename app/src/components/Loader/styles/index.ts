import { Styles, createUseStyles } from "react-jss";

const react: Styles = {
	backgroundColor: "#222",
	height: "100%",
	width: "6px",
	display: "inline-block",
	animation: "$blockAnimation 1.2s infinite ease-in-out",
	animationDuration: "1.2"
};

export const useStyles = createUseStyles({
	container: {
		display: "flex",
		justifyContent: "center"
	},
	barsContainer: {
		width: 50,
		textAlign: "center",
		fontSize: 10,
		height: 30
	},
	"@keyframes blockAnimation": {
		"0%, 40%, 100%": { transform: "scaleY(0.4)" },
		"20%": { transform: "scaleY(1)" }
	},
	defaultRect: {
		extend: react
	},
	rect2: {
		extend: react,
		animationDelay: "-1.1s"
	},
	rect3: {
		extend: react,
		animationDelay: "-1s"
	},
	rect4: {
		extend: react,
		animationDelay: "-0.9s"
	},
	rect5: {
		extend: react,
		animationDelay: "-0.8s"
	}
});
