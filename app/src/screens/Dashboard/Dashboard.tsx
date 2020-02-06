import React, { useState, useEffect } from "react";
import { PaginatedResult, Article, Pagination, OrderBy } from "shared";

import ArticleCard from "./ArticleCard/ArticleCard";

import { getArticles } from "../../services/dataService";

import { useStyles } from "./styles";

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

	const requestArticles = (newFilter: Pagination) =>
		getArticles("", newFilter)
			.then(setArticles)
			.catch(setError);

	useEffect(() => {
		requestArticles({ page: 1, pageSize: 10, orderBy: OrderBy.Newest });
	}, []);

	return (
		<div className={classes.container}>
			{error ? (
				<div className={classes.error}>{error}</div>
			) : (
				<>
					<div>News</div>
					<div>Total: {total}</div>
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
