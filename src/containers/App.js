import React from "react";
import Header from "../components/header/header.js";
import Content from "../components/content/content.js";
import Footer from "../components/footer/footer";
import './App.scss';

export default class App extends React.Component {
    render() {
        return (
            <div className="news-main-div">
                <div className="content-panel">
                    <Header title="Earth Newz" />
                    <Content />
                    <Footer />
                </div>
            </div>
        )
    }
};