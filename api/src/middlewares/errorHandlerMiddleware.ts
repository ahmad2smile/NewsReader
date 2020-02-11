import { Request, Response, NextFunction } from "express";

import { ServerError, HttpError } from "../Errors/";

export const errorHandler = (
	err: Error,
	_req: Request,
	res: Response,
	next: NextFunction
) => {
	if (err instanceof HttpError) {
		err.handle(res);

		return;
	}

	if (res.headersSent) {
		return next(err);
	}

	const handler = new ServerError(err.message);
	handler.handle(res);
};
