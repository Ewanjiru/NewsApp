import React from "react";
import { shallow, mount } from "enzyme";
import Header from '../src/components/header';

describe("News App Header", () => {
    let wrapper;
    it("wraps the header content under a div with .header class", () => {
        wrapper = shallow(<Header />);
        const headerDiv = wrapper.find('.header');
        expect(headerDiv.length).toBe(1);
    });

    it("should render the logo", () => {
        wrapper = mount(<Header />);
        expect(wrapper.find('.logo').length).toBe(1);
    });

    it("should display search box and icon", () => {
        wrapper = mount(<header />);
        // let icon = wrapper.find('searchIcon');
        console.log('>>>>>>>>>>>>>>>>>')
        console.log(wrapper.find('.searchSource').length);
        expect(wrapper.find('.searchSource').length).toBe(1);
        expect(wrapper.find('img').exists).toBeTruthy;
        // icon.simulate('click')
        // expect(fetch())
    });

    it("should logout", () => {
        wrapper = mount(<header />);
        let logout = wrapper.find('.buttonDiv');
        expect(wrapper.find('.logoutDiv').length).toBe(1);
        expect(wrapper.find('.welcomeMessage').text().toBe('Welcome'));
        logout.simulate('click');
        expect(logout.hasClass('active')).toBeTruthy()
    })
});