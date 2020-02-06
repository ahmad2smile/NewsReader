import { Request, Response } from "express";

export function RequestHandler<TResult>() {
	return (target: any, key: string, descriptor: PropertyDescriptor) => {
		const original = descriptor.value;

		// tslint:disable-next-line: only-arrow-functions
		descriptor.value = async function(req: Request, res: Response) {
			try {
				const result: TResult = await original.apply(this, [req, res]);

				res.json(result);
			} catch (err) {
				res.status(500).json({
					message:
						err.response.data.response.message ||
						err.message ||
						"Something went wrong. Please try again!"
				});
			}
		};
	};
}
