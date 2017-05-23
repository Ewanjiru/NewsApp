import React from "react";
require("!style-loader!css-loader!sass-loader!./Footer.scss");

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer" >
        <h5>Copyright EarthNewZ 2017 </h5 >
      </div >
    );
  }
}
