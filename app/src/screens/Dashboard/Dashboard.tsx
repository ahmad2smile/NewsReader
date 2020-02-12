import React from "react";

import Loader from "../../components/Loader/Loader";

import Filter from "./Filter/Filter";
import ArticleCard from "./ArticleCard/ArticleCard";
import PaginationComponent from "./PaginationComponent/PaginationComponent";

import { useArticles } from "./utils/articlesHook";

import { useStyles } from "./styles";

const Dashboard = () => {
	const classes = useStyles();

	const {
		articles,
		error,
		loading,
		total,
		search,
		setSearch,
		orderBy,
		setOrderBy,
		pageSize,
		setPageSize,
		pages,
		currentPage,
		setPage
	} = useArticles();

	return (
		<div className={classes.container}>
			<h1>News Reader</h1>
			<Filter
				search={search}
				onSearch={setSearch}
				orderBy={orderBy}
				onOrderBy={setOrderBy}
			/>
			{error ? (
				<div className={classes.error}>{error}</div>
			) : loading ? (
				<Loader />
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
						onPageNavigation={setPage}
						onPageSizeChange={setPageSize}
					/>
				</>
			)}
		</div>
	);
};

export default Dashboard;
