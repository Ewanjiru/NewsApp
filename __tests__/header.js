import React from "react";
import { shallow, mount } from "enzyme";
import Header from "../src/components/Header/Header.js";

describe("News App Header", () => {
    let wrapper;
    it("wraps the header content under a div with .header class", () => {
        wrapper = shallow(<Header />);
        const headerDiv = wrapper.find(".header");
        expect(headerDiv.length).toBe(1);
    });

   
   
})