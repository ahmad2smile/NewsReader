import { Request, Response } from "express";
import { fetchArticles } from "../services/dataService";
import { Article, PaginatedResult, Pagination } from "shared";
import { RequestHandler } from "../utils/requestDecorator";

export class ArticleController {
	@RequestHandler<PaginatedResult<Article>>()
	public get(req: Request, res: Response): Promise<PaginatedResult<Article>> {
		const { search, page, pageSize, orderBy } = req.query;
		const pagination: Pagination = { page, pageSize, orderBy };

		return fetchArticles(search, pagination);
	}
}
