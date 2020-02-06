import express from "express";

import { ArticleController } from "./ArticleController";

export const articleRouter = express.Router({
	strict: true
});

const controller = new ArticleController();

articleRouter.get("/details", controller.details);

articleRouter.get("/", controller.get);
