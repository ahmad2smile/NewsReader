import React, { useState, useEffect } from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { Article } from "shared";

import Title from "../../components/Title/Title";
import Loader from "../../components/Loader/Loader";

import { getArticleDetails, apiErrorHandler } from "../../services/dataService";

import { useStyles } from "./styles";

const ArticleDetails = () => {
	const classes = useStyles();
	const { params } = useRouteMatch();
	const id = params[0];

	const [article, setArticle] = useState<Article>();
	const [error, setError] = useState("");

	useEffect(() => {
		getArticleDetails(id)
			.then(setArticle)
			.catch(apiErrorHandler(setError));
	}, [id]);

	return (
		<Title title={(article && article.title) || error || "Loading..."}>
			<div className={classes.container}>
				<Link to="/" className={classes.backButton}>
					{"<"} Dashboard
				</Link>
				{error ? (
					<div className={classes.error}>{error}</div>
				) : article ? (
					<>
						{article.thumbnail && (
							<div className={classes.imgContainer}>
								<img
									src={article.thumbnail}
									alt={article.title}
								/>
							</div>
						)}
						<h3>{article.title}</h3>
						<div
							className={classes.articleBody}
							dangerouslySetInnerHTML={{
								__html: article.body || ""
							}}
						/>
					</>
				) : (
					<Loader />
				)}
			</div>
		</Title>
	);
};

export default ArticleDetails;
