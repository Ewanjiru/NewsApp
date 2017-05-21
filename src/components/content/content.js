import React from "react";
import './Content.scss';
import newsStore from './../../stores/NewsStore';
import NewsActions from './../../actions/NewsActions';
import Sidebar from '../Sidebar/Sidebar.js';


export default class Content extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			articles: newsStore.getArticles(),
			filteredArticles: [],
			source: '',
		}

		this._onChange = this._onChange.bind(this);
		this.handleSourceChange = this.handleSourceChange.bind(this);
		this.filterState = this.filterState.bind(this);
	}

	componentDidMount() {
		newsStore.addListener(this._onChange);
		NewsActions.loadHeadlines();
	}

	componentWillUnmount() {
		newsStore.removeListener(this._onChange);
	}

	_onChange() {
		const data = newsStore.getArticles();
		if (data) {
			this.setState({
				articles: data,
				filteredArticles: data,
			});
		} else {
			alert("An error occured");
		}
	}

	handleSourceChange(source) {
		//this.setState({ source }, this.filterState);
		NewsActions.onclickGetHeadlines(source, sortby);
	}

	filterState() {
		const {
			articles,
			source,
		} = this.state;
		const filteredData = articles.filter(article => article.source === source);
		this.setState({
			filteredArticles: filteredData
		});
	}

	//display a div having the articles' headlines,url,author and descriptions
	render() {
		const { filteredArticles } = this.state;
		return (
			<div className="container">
				<Sidebar
					updateSelectedSource={this.handleSourceChange}
				/>
				<div className="content">
					{
						filteredArticles.map((headline, index) => {
							return (
								<div className="item" id={index} key={index}>
									<h3>{headline.author}</h3>
									<h3>{headline.title}</h3>
									<p>{headline.description}</p>
									<b>{headline.publishedAt}</b>
									<p><a target="_blank" href={headline.url}>Read Article</a></p>
								</div>
							);
						})};
					</div>
			</div>
		);
	}
}