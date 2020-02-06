import { Request, Response } from "express";

export function RequestHandler<TResult>() {
	return (target: any, key: string, descriptor: PropertyDescriptor) => {
		const original = descriptor.value;

		descriptor.value = function(req: Request, res: Response) {
			original
				.apply(this, [req, res])
				.then((response: TResult) => res.json(response))
				.catch((err: any) =>
					res.status(500).json({
						error: {
							message: "something went wrong.",
							details: err.message
						}
					})
				);
		};
	};
}
