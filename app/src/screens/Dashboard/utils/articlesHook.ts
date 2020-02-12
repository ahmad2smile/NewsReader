import { useReducer, useEffect, Reducer } from "react";
import { PaginatedResult, Article, OrderBy, Pagination } from "shared";

import { useDebounce } from "./debounceHook";

import { getArticles, apiErrorHandler } from "../../../services/dataService";
import { useHistory } from "react-router-dom";

interface State extends PaginatedResult<Article> {
	search: string;
	error: string;
	loading: boolean;
	orderBy: OrderBy;
}

const initialState: State = {
	results: [],
	orderBy: OrderBy.Newest,
	pageSize: 10,
	currentPage: 1,
	pages: 1,
	startIndex: 1,
	total: 0,
	search: new URLSearchParams(window.location.search).get("search") || "",
	error: "",
	loading: false
};

const reducer = (state: State, payload: Partial<State>): State => ({
	...state,
	...payload
});

export const useArticles = () => {
	const { push, location } = useHistory();
	const [
		{
			results: articles,
			orderBy,
			pageSize,
			currentPage,
			pages,
			total,
			search,
			error,
			loading
		},
		setState
	] = useReducer(reducer, initialState);

	const debounceSearch = useDebounce(search, 500);

	const updateSearchQuery = (_search: string) => {
		const updatedPath: any = {
			pathname: location.pathname
		};

		if (_search) {
			// tslint:disable-next-line: no-string-literal
			updatedPath["search"] = `?search=${_search}`;
		}

		push(updatedPath);
	};

	const requestArticles = (_search: string, newFilter: Pagination) => {
		setState({
			loading: true,
			error: ""
		});

		updateSearchQuery(_search);

		getArticles(_search, newFilter)
			.then(setState)
			.catch(
				apiErrorHandler((err: string) =>
					setState({
						error: err
					})
				)
			)
			.finally(() => setState({ loading: false }));
	};

	useEffect(() => {
		requestArticles(debounceSearch, {
			orderBy,
			pageSize: 10,
			page: 1
		});
	}, [debounceSearch, orderBy]);

	useEffect(() => {
		requestArticles(search, {
			page: 1,
			pageSize: 10,
			orderBy: OrderBy.Newest
		});
	}, []);

	const setSearch = (_search: string) => setState({ search: _search });
	const setOrderBy = (_orderBy: OrderBy) => setState({ orderBy: _orderBy });
	const setPage = (page: number) => setState({ currentPage: page });
	const setPageSize = (_pageSize: number) =>
		setState({ pageSize: _pageSize });

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
