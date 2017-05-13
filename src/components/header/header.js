import React from "react";
import './header.scss';
export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="logo">
                    <img src='./images/globe1.png' alt="earth" />
                </div>
                <span className="title">{this.props.title}</span>
                <div className="searchSource">
                    <input type="text" className="searchField" placeholder="search a source" />
                    <div className="searchIcon">
                        <img src="./images/icon.png" alt="search" />
                    </div>
                </div>
            </div>
        );
    }
}
