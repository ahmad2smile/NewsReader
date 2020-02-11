import { Request, Response, NextFunction } from "express";

export const RequestHandler = (
	_target: any,
	_key: string,
	descriptor: PropertyDescriptor
) => {
	const original = descriptor.value;

	descriptor.value = (req: Request, res: Response, next: NextFunction) =>
		original(req, res)
			.then((r: any) => res.json(r)) // context saving by arrow func
			.catch(next);
};
