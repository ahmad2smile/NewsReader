import { Request, Response } from "express";
import { fetchArticles, articleDetails } from "../services/dataService";
import { Article, PaginatedResult, Pagination } from "shared";
import { RequestHandler } from "../utils/requestDecorator";

export class ArticleController {
	@RequestHandler<PaginatedResult<Article>>()
	public async get(
		req: Request,
		res: Response
	): Promise<PaginatedResult<Article>> {
		const { search, page, pageSize, orderBy } = req.query;
		const pagination: Pagination = { page, pageSize, orderBy };

		const response = await fetchArticles(search, pagination);

		if (!response.results.length) {
			throw new Error("No results found");
		}

		return response;
	}

	@RequestHandler<Article>()
	public details(req: Request, res: Response): Promise<Article> {
		const { id } = req.query;

		if (!id) {
			throw new Error("Invalid Article Link");
		}

		return articleDetails(id);
	}
}
