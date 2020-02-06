import { OrderBy } from "./OrderBy";

export interface PaginatedResult<TEntity> {
	total: number;
	startIndex: number;
	pageSize: number;
	currentPage: number;
	pages: number;
	orderBy: OrderBy;
	results: Array<TEntity>;
}
