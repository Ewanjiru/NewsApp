import React from "react";
import Header from "../components/header/header.js"
import Content from "../components/Content/Content.js"
import Footer from '../components/Footer/footer.js';

export default class App extends React.Component {

	render() {
		return (
			<div className="main-frame">
				<Header />
				<Content />
				<Footer />
			</div>
		)
	}
}