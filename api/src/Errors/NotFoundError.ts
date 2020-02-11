import { HttpError } from "./HttpError";
import { HttpStatus } from "./HttpStatus";

export class NotFoundError extends HttpError {
	public HttpErrorCode = HttpStatus.NOT_FOUND;
}
