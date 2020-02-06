import { Article, PaginatedResult, Pagination } from "shared";
import axios from "axios";

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
	const response = await guardianApi.get("/search", {
		params: {
			q: search,
			page: pagination.page,
			"page-size": pagination.pageSize,
			"order-by": pagination.orderBy,
			"show-fields": "thumbnail,trailText"
		}
	});

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
