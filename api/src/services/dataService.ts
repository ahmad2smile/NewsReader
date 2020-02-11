import { Article, PaginatedResult, Pagination } from "shared";
import axios, { AxiosError } from "axios";
import { HttpError } from "../Errors";

const baseURL = "https://content.guardianapis.com";

const guardianApi = axios.create({
	baseURL
});

guardianApi.interceptors.request.use(config => ({
	...config,
	params: {
		"api-key": process.env.API_KEY,
		...config.params
	}
}));

export const fetchArticles = async (
	search: string,
	pagination: Pagination
): Promise<PaginatedResult<Article>> => {
	const response = await guardianApi
		.get("/search", {
			params: {
				q: search,
				page: pagination.page,
				"page-size": pagination.pageSize,
				"order-by": pagination.orderBy,
				"show-fields": "thumbnail,trailText"
			}
		})
		.catch(requestErrorHandler);

	const res = response.data.response;
	const results = res.results;

	const articles: Array<Article> = results.map((r: any) => ({
		id: r.id,
		date: r.webPublicationDate,
		title: r.webTitle,
		url: r.webUrl,
		description: r.fields?.trailText,
		thumbnail: r.fields?.thumbnail
	}));

	const paginatedResult: PaginatedResult<Article> = {
		total: res.total,
		startIndex: res.startIndex,
		pageSize: res.pageSize,
		currentPage: res.currentPage,
		pages: res.pages,
		orderBy: res.orderBy,
		results: articles
	};

	return paginatedResult;
};

export const articleDetails = async (id: string): Promise<Article> => {
	const response = await guardianApi
		.get(`/${id}`, {
			params: {
				"show-fields": "thumbnail,body"
			}
		})
		.catch(requestErrorHandler);

	const content = response.data.response.content;

	const article: Article = {
		id: content.id,
		date: content.webPublicationDate,
		title: content.webTitle,
		url: content.webUrl,
		body: content.fields?.body,
		thumbnail: content.fields?.thumbnail
	};

	return article;
};

const requestErrorHandler = (err: AxiosError) => {
	const message =
		err.response?.data?.response?.message ||
		err.message ||
		"Something went wrong. Please try again!";

	throw new HttpError(message, err.response?.status);
};
