import React from "react";
import Sidebar from '../sidebar/sideBar.js';
import Mainpanel from '../mainpanel/headlinePanel.js';
export default class Content extends React.Component {
    render() {
        return (
            <div className="contentDiv">
                <Sidebar />
                <Mainpanel />
                );
                })}
            </div>

        );
    }
}
