import { useState, useEffect } from "react";
import { PaginatedResult, Article, OrderBy, Pagination } from "shared";

import { useDebounce } from "./debounceHook";
import { getArticles, apiErrorHandler } from "../../../services/dataService";

export const useArticles = () => {
	const [
		{ results: articles, total, currentPage, pageSize, pages },
		setArticleResults
	] = useState<PaginatedResult<Article>>({
		results: [],
		orderBy: OrderBy.Newest,
		pageSize: 10,
		currentPage: 1,
		pages: 1,
		startIndex: 1,
		total: 0
	});
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(true);

	const [search, setSearch] = useState("");
	const [orderBy, setOrderBy] = useState(OrderBy.Newest);
	const debounceSearch = useDebounce(search, 500);

	const requestArticles = (_search: string, newFilter: Pagination) => {
		setLoading(true);
		setError("");

		getArticles(_search, newFilter)
			.then(setArticleResults)
			.catch(apiErrorHandler(setError))
			.finally(() => setLoading(false));
	};

	useEffect(() => {
		requestArticles(debounceSearch, {
			orderBy,
			pageSize: 10,
			page: 1
		});
	}, [debounceSearch, orderBy]);

	useEffect(() => {
		requestArticles("", { page: 1, pageSize: 10, orderBy: OrderBy.Newest });
	}, []);

	const setPage = (page: number) => {
		requestArticles(search, {
			orderBy,
			pageSize: 10,
			page
		});
	};

	const setPageSize = (_pageSize: number) => {
		requestArticles(search, {
			orderBy,
			pageSize: _pageSize,
			page: currentPage
		});
	};

	return {
		articles,
		error,
		loading,
		total,
		pageSize,
		setPageSize,
		pages,
		currentPage,
		setPage,
		search,
		setSearch,
		orderBy,
		setOrderBy
	};
};
