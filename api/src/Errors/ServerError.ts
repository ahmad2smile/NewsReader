import { HttpError } from "./HttpError";
import { HttpStatus } from "./HttpStatus";

export class ServerError extends HttpError {
	public HttpErrorCode: number = HttpStatus.INTERNAL_SERVER_ERROR;
}
