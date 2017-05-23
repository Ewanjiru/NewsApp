import React from "react";
require("!style-loader!css-loader!sass-loader!./Header.scss");
import Login from "../Login/Login.js";

export default class Header extends React.Component {
	render() {
		return (
			<div className="header">
				<div className="logo">
					<img src="./../../../images/news_burned.png" alt="icon" />
				</div>
				<div className="title">{}</div>
				<div className="menuIcon">
					<Login />
				</div>
			</div>
		);
	}
}
