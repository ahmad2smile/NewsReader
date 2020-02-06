import React, { useState, useEffect } from "react";
import { PaginatedResult, Article, Pagination, OrderBy } from "shared";

import ArticleCard from "./ArticleCard/ArticleCard";

import { getArticles } from "../../services/dataService";

import { useStyles } from "./styles";
import Filter from "./Filter/Filter";

const Dashboard = () => {
	const classes = useStyles();

	const [error, setError] = useState("");
	const [{ results: articles, total }, setArticles] = useState<
		PaginatedResult<Article>
	>({
		results: [],
		orderBy: OrderBy.Newest,
		pageSize: 10,
		currentPage: 1,
		pages: 10,
		startIndex: 1,
		total: 100
	});

	const requestArticles = (search: string, newFilter: Pagination) =>
		getArticles(search, newFilter)
			.then(setArticles)
			.catch(setError);

	useEffect(() => {
		requestArticles("", { page: 1, pageSize: 10, orderBy: OrderBy.Newest });
	}, []);

	const handleFilter = (value: string, orderBy: OrderBy) => {
		requestArticles(value, {
			orderBy,
			pageSize: 10,
			page: 1
		});
	};

	return (
		<div className={classes.container}>
			<Filter onFilter={handleFilter} />
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
				</>
			)}
		</div>
	);
};

export default Dashboard;
