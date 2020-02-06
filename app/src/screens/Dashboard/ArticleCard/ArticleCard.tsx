import React from "react";
import { Article } from "shared";

import { useStyles } from "./styles";

interface IProps {
	article: Article;
}

const ArticleCard = ({ article }: IProps) => {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<div className={classes.imgContainer}>
				<img src={article.thumbnail} alt={article.title} />
			</div>
			<div className={classes.detailsContainer}>
				<h4 className={classes.title}>{article.title}</h4>
				<p className={classes.description}>{article.description}</p>
				<div className={classes.links}>
					<a href="#details" className={classes.details}>
						Details
					</a>
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
