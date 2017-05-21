import React from "react";
import { shallow } from "enzyme";
import App from '../src/containers/App';

describe("News App", () => {
    it("wraps the content under a div with .news-main-div class", () => {
        let wrapper = mount(<App />);
        const divs = wrapper.find('div');
        expect(divs.length).toBeGreaterThan(1);

        const notificationsDiv = wrapper.find('.news-main-div');
        expect(notificationsDiv.length).toBe(1);

    });
});