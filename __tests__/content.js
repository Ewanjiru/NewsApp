import React from "react";
import { shallow } from "enzyme";
import Content from '../src/components/content';

describe("News App Content Div", () => {
    let wrapper;
    it("wraps the content under a div with .contentDiv class", () => {
        wrapper = shallow(<Content />);
        const divs = wrapper.find('div');
        const newsContentDiv = wrapper.find('.contentDiv');
        expect(newsContentDiv.length).toBe(1);
    });
});