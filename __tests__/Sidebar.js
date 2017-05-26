import React from "react";
import { shallow, mount } from "enzyme";
import sinon from 'sinon';
import Sidebar from '../src/components/Sidebar/Sidebar.js';
import Sort from '../src/components/Sort/Sort';
import newsStore from '../src/stores/NewsStore';

describe("The NewsApp Sidebar", () => {
  let wrapper;
  it("wraps the content under a div with .aside class", () => {
    wrapper = shallow(<Sidebar />);
    const divs = wrapper.find('div');
    const sidebar = wrapper.find('.aside');
    expect(sidebar.length).toBe(1);
  });

  it('should test that the component mounts', () => {
    sinon.spy(Sidebar.prototype, 'componentDidMount');
    wrapper = mount(<Sidebar />);
    expect(Sidebar.prototype.componentDidMount.calledOnce).toEqual(true);
    Sidebar.prototype.componentDidMount.restore();
  });

  it('should receive props for updateSelectedSource', () => {
    const wrapper = shallow(<Sidebar />)
    expect(wrapper.props().updateSelectedSource).toDefined;
  });

  it("gets sources set state", () => {
    wrapper = shallow(<Sidebar />);
    expect(wrapper.state().sources).toEqual(newsStore.getSources());
  });

  it("should call handleSearch onkeyup", () => {
    sinon.spy(Sidebar.prototype, 'handleSearch');
    wrapper = mount(<Sidebar />);
    wrapper.find('input').simulate('keyup');
    expect(Sidebar.prototype.handleSearch.calledOnce).toEqual(true);
  });
})

