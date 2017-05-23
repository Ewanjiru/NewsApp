import React from "react";
import { shallow, mount } from "enzyme";
import sinon from "sinon";
import Content from '../src/components/Content/Content.js';
import Sidebar from '../src/components/Sidebar/Sidebar.js';

describe("The news App content", () => {
  let wrapper;
  it('should test that the component mounts', () => {
    sinon.spy(Content.prototype, 'componentDidMount');
    wrapper = mount(<Content />);
    expect(Content.prototype.componentDidMount.calledOnce).toEqual(true);
    Content.prototype.componentDidMount.restore();

  });

  it("renders the sidebar", () => {
    wrapper = mount(<Content />);
    expect(wrapper.find(Sidebar).render().find('.aside').length).toBe(1);
  });

  it("should call handleSortByDropDown on change event", () => {
    wrapper = mount(<Content />);
    sinon.spy(Content.prototype, 'handleSortByDropDown');
    expect(wrapper.length).toEqual(1)
    console.log(expect(wrapper.length).toEqual(1))
    wrapper.find('select').simulate('change');
    expect(Content.prototype.handleSortByDropDown.called).toEqual(true);
  });
})