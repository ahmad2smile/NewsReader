import React, { useState, useEffect } from "react";
import { OrderBy } from "shared";

import { useStyles } from "./styles";
import { useDebounce } from "./utils/debounceHook";

interface IProps {
	onFilter: (search: string, orderBy: OrderBy) => void;
}

const Filter = ({ onFilter }: IProps) => {
	const classes = useStyles();

	const [search, setSearch] = useState("");
	const [orderBy, setOrderBy] = useState(OrderBy.Newest);
	const debouncedSearch = useDebounce(search, 500);

	useEffect(() => {
		onFilter(debouncedSearch, orderBy);
	}, [debouncedSearch]);

	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newSearch = event.target.value;

		setSearch(newSearch);
	};

	const handleOrderBy = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const newOrderBy = event.target.value as OrderBy;

		setOrderBy(newOrderBy);
		onFilter(search, newOrderBy);
	};

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
			<div className={classes.orderByContainer}>
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
