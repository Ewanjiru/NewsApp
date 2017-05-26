import React from "react";
import { shallow } from "enzyme";
import Footer from "../src/components/Footer/Footer.js";

describe("The NewsApp Footer", () => {
  it("has a footer with a copyright text", () => {
    const wrapper = shallow(<Footer />);
    const footerDiv = wrapper.find('div');
    expect(footerDiv.length).toEqual(1);
  });
})