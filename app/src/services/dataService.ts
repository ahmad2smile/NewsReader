import { PaginatedResult, Pagination, Article } from "shared";
import axios from "axios";

const appBaseUrl = "http://localhost:3005/api";

const api = axios.create({
	baseURL: appBaseUrl,
	timeout: 15000
});

export const getArticles = async (
	search: string,
	pagination: Pagination
): Promise<PaginatedResult<Article>> => {
	const query = `search=${search}&page=${pagination.page}&pageSize=${pagination.pageSize}&orderBy=${pagination.orderBy}`;

	const response = await api.get(`/articles?${query}`);

	return response.data;
};
