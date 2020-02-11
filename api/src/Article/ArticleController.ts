import { Request, Response } from "express";
import { Article, PaginatedResult, Pagination } from "shared";

import { fetchArticles, articleDetails } from "../services/dataService";

import { RequestHandler } from "../utils/requestDecorator";

import { NotFoundError, BadRequest } from "../Errors/";

export class ArticleController {
	@RequestHandler
	public async get(
		req: Request,
		res: Response
	): Promise<PaginatedResult<Article>> {
		const { search, page, pageSize, orderBy } = req.query;
		const pagination: Pagination = { page, pageSize, orderBy };

		const response = await fetchArticles(search, pagination);

		if (!response.results.length) {
			throw new NotFoundError("No results found");
		}

		return response;
	}

	@RequestHandler
	public details(req: Request, res: Response): Promise<Article> {
		const { id } = req.query;

		if (!id || id === `""`) {
			throw new BadRequest("Invalid Article Link");
		}

		return articleDetails(id);
	}
}
