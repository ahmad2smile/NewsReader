import { HttpError } from "./HttpError";
import { HttpStatus } from "./HttpStatus";

export class BadRequest extends HttpError {
	public HttpErrorCode = HttpStatus.BAD_REQUEST;
}
