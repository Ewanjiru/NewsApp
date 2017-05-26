import React from "react";
import './header.scss';
import Login from '../Login/Login.js';

export default class Header extends React.Component {
	render() {
		return (
			<div className="header">
				<div className="title"><h2>E-NEWZ</h2></div>
				<div className="logo">
					<img src="./../../../images/news_burned.png" alt="icon" />
				</div>
				<div className="loginIcon">
					<Login />
				</div>
			</div>
		);
	}
}
