import React from "react";
import { shallow } from "enzyme";
import Content from '../src/components/Content/Content.js';

describe("News App container Div", () => {
    let wrapper;
    it("wraps the content under a div with .container class", () => {
        wrapper = shallow(<Content />);
        const newsContentDiv = wrapper.find('.container');
        expect(newsContentDiv.length).toBe(1);
    });
});