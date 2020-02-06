import express, { Request, Response } from "express";

import { ArticleController } from "./ArticleController";

export const articleRouter = express.Router({
	strict: true
});

const controller = new ArticleController();

articleRouter.get("/", (req: Request, res: Response) => {
	controller.get(req, res);
});
