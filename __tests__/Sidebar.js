import React from "react";
import { shallow, mount } from "enzyme";
import Sidebar from '../src/components/Sidebar/Sidebar.js';

describe("News App Sidebar", () => {
    let wrapper;
    it("wraps the content under a div with .aside class", () => {
        wrapper = shallow(<Sidebar />);
        const asideDiv = wrapper.find('.aside');
        expect(asideDiv.length).toBe(1);
    });

    it("Receives a function as props",()=>{
    	wrapper = mount(<Sidebar />);
    	expect(wrapper.find({prop: 'value'})).to.have.length(1)

    });

    it("Has children", () =>{

    });


});