import axios, { Canceler } from "axios";
import { PaginatedResult, Pagination, Article } from "shared";

const appBaseUrl =
	process.env.NODE_ENV === "production"
		? "/api"
		: "http://localhost:3005/api";

const api = axios.create({
	baseURL: appBaseUrl,
	timeout: 30000
});

const CancelToken = axios.CancelToken;
let cancel: Canceler;

export const apiErrorHandler = (callBack: Function) => (error: any) => {
	if (axios.isCancel(error)) {
		console.log("Request canceled", error.message);
	} else {
		const message =
			error.response?.data?.message ||
			"Something went wrong. Please try again!";
		callBack(message);
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
