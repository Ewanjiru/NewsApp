import React from "react";
import { shallow } from "enzyme";
import Login from '../src/components/Login/Login.js';

describe("The NewsApp google Login", () => {
  it("has renders a div", () => {
    const wrapper = shallow(<Login />);
    const loginDiv = wrapper.find('div');
    expect(loginDiv.length).toEqual(1);
  });
})