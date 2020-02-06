import React from "react";

interface IProps {
	title: string;
	children: JSX.Element;
}

const Title = ({ title, children }: IProps) => {
	React.useEffect(() => {
		document.title = title;
	}, [title]);

	return <>{children}</>;
};

export default Title;
