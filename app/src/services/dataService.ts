import axios, { Canceler } from "axios";
import { PaginatedResult, Pagination, Article } from "shared";

const appBaseUrl = "http://localhost:3005/api";

const api = axios.create({
	baseURL: appBaseUrl,
	timeout: 15000
});

const CancelToken = axios.CancelToken;
let cancel: Canceler;

export const isRequestCanceled = (callBack: Function) => (error: Error) => {
	if (axios.isCancel(error)) {
		console.log("Request canceled", error.message);
	} else {
		callBack(error.message);
	}
};

export const getArticles = async (
	search: string,
	pagination: Pagination
): Promise<PaginatedResult<Article>> => {
	cancel && cancel(); // cancel previous requests

	const query = `search=${search}&page=${pagination.page}&pageSize=${pagination.pageSize}&orderBy=${pagination.orderBy}`;

	const response = await api.get(`/articles?${query}`, {
		cancelToken: new CancelToken(c => (cancel = c))
	});

	return response.data;
};

export const getArticleDetails = async (id: string): Promise<Article> => {
	const response = await api.get(`/articles/details?id=${id}`);

	return response.data;
};
