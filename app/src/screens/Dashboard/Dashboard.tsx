import React, { useState, useEffect } from "react";
import { PaginatedResult, Article, Pagination, OrderBy } from "shared";

import Filter from "./Filter/Filter";
import ArticleCard from "./ArticleCard/ArticleCard";
import PaginationComponent from "./PaginationComponent/PaginationComponent";

import { getArticles, isRequestCanceled } from "../../services/dataService";

import { useDebounce } from "./Filter/utils/debounceHook";

import { useStyles } from "./styles";

const Dashboard = () => {
	const classes = useStyles();

	const [error, setError] = useState("");
	const [
		{ results: articles, total, currentPage, pageSize, pages },
		setArticleResults
	] = useState<PaginatedResult<Article>>({
		results: [],
		orderBy: OrderBy.Newest,
		pageSize: 10,
		currentPage: 1,
		pages: 1,
		startIndex: 1,
		total: 0
	});

	const [search, setSearch] = useState("");
	const [orderBy, setOrderBy] = useState(OrderBy.Newest);
	const debouncedSearch = useDebounce(search, 500);

	useEffect(() => {
		requestArticles(debouncedSearch, {
			orderBy,
			pageSize: 10,
			page: 1
		});
	}, [debouncedSearch]);

	const requestArticles = (search: string, newFilter: Pagination) =>
		getArticles(search, newFilter)
			.then(setArticleResults)
			.catch(isRequestCanceled(setError));

	useEffect(() => {
		requestArticles("", { page: 1, pageSize: 10, orderBy: OrderBy.Newest });
	}, []);

	const handlePageNavigation = (page: number) => {
		requestArticles(search, {
			orderBy,
			pageSize: 10,
			page
		});
	};

	const handlePageSizeChange = (pageSize: number) => {
		requestArticles(search, {
			orderBy,
			pageSize,
			page: currentPage
		});
	};

	return (
		<div className={classes.container}>
			<Filter
				search={search}
				onSearch={setSearch}
				orderBy={orderBy}
				onOrderBy={setOrderBy}
			/>
			{error ? (
				<div className={classes.error}>{error}</div>
			) : (
				<>
					<h4>News</h4>
					<p>Total: {total}</p>
					<div className={classes.articles}>
						{articles.map(article => (
							<div
								className={classes.articleContainer}
								key={article.id}
							>
								<ArticleCard article={article} />
							</div>
						))}
					</div>
					<PaginationComponent
						currentPage={currentPage}
						pageSize={pageSize}
						pages={pages}
						onPageNavigation={handlePageNavigation}
						onPageSizeChange={handlePageSizeChange}
					/>
				</>
			)}
		</div>
	);
};

export default Dashboard;
