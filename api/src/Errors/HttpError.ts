import { Response } from "express";
import { HttpStatus } from "./HttpStatus";

export class HttpError {
	public constructor(
		public message: string,
		protected HttpErrorCode: number = HttpStatus.INTERNAL_SERVER_ERROR
	) {
		this.handle = this.handle.bind(this);
	}

	public handle(response: Response) {
		response.status(this.HttpErrorCode).json({
			message: this.message
		});
	}
}
