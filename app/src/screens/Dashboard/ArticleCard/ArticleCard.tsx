import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Article } from "shared";

import { useStyles } from "./styles";

interface IProps {
	article: Article;
}

const ArticleCard = ({ article }: IProps) => {
	const classes = useStyles();
	const history = useHistory();

	const articleRoute = `/article/${article.id}`;

	const handleToDetails = () => {
		history.push(articleRoute);
	};

	return (
		<div onClick={handleToDetails} className={classes.container}>
			<div className={classes.imgContainer}>
				<img src={article.thumbnail} alt={article.title} />
			</div>
			<div className={classes.detailsContainer}>
				<h4 className={classes.title}>{article.title}</h4>
				<p className={classes.description}>{article.description}</p>
				<div
					onClick={e => e.stopPropagation()}
					className={classes.links}
				>
					<Link to={articleRoute} className={classes.details}>
						Details
					</Link>
					<a
						href={article.url}
						target="__blank"
						rel="noopener"
						className="source"
					>
						Source
					</a>
				</div>
			</div>
		</div>
	);
};

export default ArticleCard;
