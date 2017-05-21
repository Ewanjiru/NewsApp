import AppDispatcher from '../dispatcher/AppDispatcher';
import appConstants from '../constants/AppConstants';

export default {
	loadHeadlines: () => {
		axios.get('https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=14ddece6f2294cbfada7f4d14d46d364')
			.then((articlesResponse) => {
				AppDispatcher.dispatch({
					actionType: appConstants.LOAD_HEADLINES,
					data: articlesResponse.data.articles
				});
			})
			.catch((message) => {
				AppDispatcher.dispatch({
					actionType: appConstants.GET_HEADLINES_ERROR,
					message
				});
			});
	},
	onclickGetHeadlines: (source, sortby) => {
		axios.get(`https://newsapi.org/v1/articles?source=${source}&sortBy=${sortby}&apiKey=14ddece6f2294cbfada7f4d14d46d364`)
			.then((articlesResponse) => {
				AppDispatcher.dispatch({
					actionType: appConstants.LOAD_HEADLINES,
					data: articlesResponse.data.articles
				});
			})
			.catch((message) => {
				AppDispatcher.dispatch({
					actionType: appConstants.GET_HEADLINES_ERROR,
					message
				});
			});
	},

	returnSources: () => {
		axios.get('https://newsapi.org/v1/sources')
			.then((sourcesResponse) => {
				AppDispatcher.dispatch({
					actionType: appConstants.GET_SOURCES,
					data: sourcesResponse.data.sources,
				});
				console.log(sourcesResponse.data.sources);
			});
	},
	showSelectedSource: (category) => {
		const selected = category;
		AppDispatcher.dispatch({
			actionType: appConstants.GET_SELECTED,
			data: selected
		});
	}

};
