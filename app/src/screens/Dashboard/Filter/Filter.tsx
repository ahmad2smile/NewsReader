import React from "react";
import { OrderBy } from "shared";

import { useStyles } from "./styles";

interface IProps {
	search: string;
	orderBy: string;
	onSearch: (search: string) => void;
	onOrderBy: (orderBy: OrderBy) => void;
}

const Filter = ({ search, orderBy, onSearch, onOrderBy }: IProps) => {
	const classes = useStyles();

	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) =>
		onSearch(event.target.value);

	const handleOrderBy = (event: React.ChangeEvent<HTMLSelectElement>) =>
		onOrderBy(event.target.value as OrderBy);

	return (
		<div className={classes.container}>
			<div className={classes.searchContainer}>
				<input
					value={search}
					placeholder="Search"
					onChange={handleSearch}
					className={classes.textField}
				/>
			</div>
			<div className="selectContainer">
				<label htmlFor="order-by-filter">Order By</label>
				<select
					id="order-by-filter"
					value={orderBy}
					onChange={handleOrderBy}
				>
					<option value={OrderBy.Newest}>Newest</option>
					<option value={OrderBy.Oldest}>Oldest</option>
				</select>
			</div>
		</div>
	);
};

export default Filter;
