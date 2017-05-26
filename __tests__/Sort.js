import React from "react";
import { shallow, mount } from "enzyme";
import sinon from 'sinon';
import Sort from '../src/components/Sort/Sort'

describe("The NewsApp Sort component", () => {
  let wrapper;
  it("wraps the sort dropdown under a .sortDiv", () => {
    wrapper = shallow(<Sort />);
    const divs = wrapper.find('div');
    expect(divs.length).toBe(1);
  });

  it('should test that the component mounts', () => {
    sinon.spy(Sort.prototype, 'componentDidMount');
    wrapper = mount(<Sort />);
    expect(Sort.prototype.componentDidMount.calledOnce).toEqual(true);
    Sort.prototype.componentDidMount.restore();
  });

  it("should call handleChange on change", () => {
    sinon.spy(Sort.prototype, 'handleChange');
    wrapper = mount(<Sort />);
    wrapper.find('select').simulate('change');
    expect(Sort.prototype.handleChange.called).toEqual(true);
  });
});