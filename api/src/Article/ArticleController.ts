import { Request, Response } from "express";
import { fetchArticles, articleDetails } from "../services/dataService";
import { Article, PaginatedResult, Pagination } from "shared";
import { RequestHandler } from "../utils/requestDecorator";

export class ArticleController {
	@RequestHandler<PaginatedResult<Article>>()
	public get(req: Request, res: Response): Promise<PaginatedResult<Article>> {
		const { search, page, pageSize, orderBy } = req.query;
		const pagination: Pagination = { page, pageSize, orderBy };

		return fetchArticles(search, pagination);
	}

	@RequestHandler<Article>()
	public details(req: Request, res: Response): Promise<Article> {
		const { id } = req.query;

		if (!id) {
			throw new Error("id is required for Article details");
		}

		return articleDetails(id);
	}
}
