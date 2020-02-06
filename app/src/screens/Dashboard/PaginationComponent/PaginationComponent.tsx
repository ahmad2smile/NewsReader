import React from "react";

import { useStyles } from "./styles";

interface IProps {
	currentPage: number;
	pageSize: number;
	pages: number;
	onPageNavigation: (page: number) => void;
	onPageSizeChange: (pageSize: number) => void;
}

const MAX_BUTTONS = 5;

const PaginationComponent = (props: IProps) => {
	const {
		currentPage,
		pageSize,
		pages,
		onPageNavigation,
		onPageSizeChange
	} = props;

	const classes = useStyles(props);

	const getNavButtonNumber = (buttonIndex: number) => {
		const currentMaxButtons = Math.min(MAX_BUTTONS, pages);

		const diffFromLastButton = currentMaxButtons - buttonIndex;
		const diffFromAbsoluteLastPage = pages - diffFromLastButton;

		const normalCurrentButtonLabel = currentPage + buttonIndex;

		return Math.min(normalCurrentButtonLabel, diffFromAbsoluteLastPage);
	};

	const buttonPosition0 = getNavButtonNumber(0);
	const buttonPosition1 = getNavButtonNumber(1);
	const buttonPosition2 = getNavButtonNumber(2);
	const buttonPosition3 = getNavButtonNumber(3);
	const buttonPosition4 = getNavButtonNumber(4);

	const handlePageClick = (selectedPage: number) => {
		return () => {
			onPageNavigation(selectedPage);
		};
	};

	const handlePageSizeChange = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		onPageSizeChange(Number(event.target.value));
	};

	return (
		<div className={classes.container}>
			<div className="selectContainer">
				<label htmlFor="page-size">Per Page</label>
				<select
					onChange={handlePageSizeChange}
					value={pageSize}
					name="page-size"
					id="page-size"
				>
					<option value={5}>5</option>
					<option value={10}>10</option>
					<option value={20}>20</option>
				</select>
			</div>
			<div className={classes.btnContainer}>
				<button
					className={classes.btn}
					disabled={!(currentPage - 1)}
					onClick={handlePageClick(currentPage - 1)}
				>
					{"<"}
				</button>
				<button
					className={classes.btn}
					disabled={currentPage === buttonPosition0}
					onClick={handlePageClick(buttonPosition0)}
				>
					{buttonPosition0}
				</button>
				<button
					className={classes.btn}
					disabled={currentPage === buttonPosition1}
					onClick={handlePageClick(buttonPosition1)}
				>
					{buttonPosition1}
				</button>
				<button
					className={classes.btn}
					disabled={currentPage === buttonPosition2}
					onClick={handlePageClick(buttonPosition2)}
				>
					{buttonPosition2}
				</button>
				<button
					className={classes.btn}
					disabled={currentPage === buttonPosition3}
					onClick={handlePageClick(buttonPosition3)}
				>
					{buttonPosition3}
				</button>
				<button
					className={classes.btn}
					disabled={currentPage === buttonPosition4}
					onClick={handlePageClick(buttonPosition4)}
				>
					{buttonPosition4}
				</button>
				<button
					className={classes.btn}
					disabled={currentPage >= pages}
					onClick={handlePageClick(currentPage + 1)}
				>
					{">"}
				</button>
			</div>
		</div>
	);
};

export default PaginationComponent;
