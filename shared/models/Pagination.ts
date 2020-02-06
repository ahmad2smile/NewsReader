import { OrderBy } from "./OrderBy";

export interface Pagination {
	orderBy: OrderBy;
	pageSize: number;
	page: number;
}
