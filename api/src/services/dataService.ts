import { Article } from "shared";
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

export const fetchArticles = async (search: string): Promise<Article> => {
	const response = await guardianApi.get("/search", {
		params: {
			q: search
		}
	});

	return response.data;
};
