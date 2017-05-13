import React from "react";
import './sideBar.scss';
export default class Side extends React.Component {
    render() {
        return (
            <div className="aside">
                <nav id="navbar">
                    <ul>Latest Headlines</ul>
                    <ul>Politics</ul>
                    <ul>Sports</ul>
                    <ul>Entertainment</ul>
                    <ul>Business</ul>
                    <ul>Music</ul>
                    <ul>Technology</ul>
                    <ul>Science And Nature</ul>
                    <ul>Gaming</ul>
                </nav>
            </div>
        );
    }
}
