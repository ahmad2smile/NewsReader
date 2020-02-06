import { Request, Response } from "express";
import { fetchArticles } from "../services/dataService";
import { Article } from "shared";
import { RequestHandler } from "../utils/requestDecorator";

export class ArticleController {
	@RequestHandler<Article>()
	public get(req: Request, res: Response): Promise<Article> {
		return fetchArticles("Thailand");
	}
}
