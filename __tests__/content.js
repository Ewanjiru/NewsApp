import React from "react";
import { shallow, mount } from "enzyme";
import sinon from "sinon";
import Content from "../src/components/Content/Content";
import Sidebar from "../src/components/Sidebar/Sidebar";

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

  it('checks that the filteredArticles state is set to null', () => {
    wrapper = shallow(<Content />);
    expect(wrapper.state().filteredArticles).toEqual([]);
    expect(wrapper.find('#article').length).toEqual(0);
  });

  it('confrims filteredArticles state is set', () => {
    wrapper = shallow(<Content />);
    wrapper.setState({
      filteredArticles: [
        {
          "author": "Rachel Kaser",
          "title": "Pokémon GO update trolls cheaters with common monsters",
          "description": "Pokémon GO developer Niantic has discovered an insidious new way to ruin a cheater's day: give them stuff they don't want.\r\n\r\nFirst spotted by the Pokémon GO subreddit The Silph ...",
          "url": "https://thenextweb.com/gaming/2017/05/24/pokemon-go-update-trolls-cheaters-common-monsters/",
          "urlToImage": "https://cdn2.tnwcdn.com/wp-content/blogs.dir/1/files/2017/02/shutterstock_568034230.jpg",
          "publishedAt": "2017-05-24T19:26:29Z"
        },
        {
          "author": "Melissa Thompson",
          "title": "How this nano technology has quietly infiltrated several consumer products",
          "description": "In nature, because water is a polar molecule, it naturally forms clusters that end up being about 1 micron in size. These water clusters are absorbed easily throughout the digestive ...",
          "url": "https://thenextweb.com/contributors/2017/05/24/nano-technology-quietly-infiltrated-several-consumer-products/",
          "urlToImage": "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2017/05/drip-351619_1920.jpg",
          "publishedAt": "2017-05-24T18:44:30Z"
        }
      ]
    });
    expect(wrapper.state().filteredArticles.length).toBeGreaterThan(1);
    expect(wrapper.find('#article').length).toBeDefined();
  });

  describe("the source state", () => {
    it('confirms that source state is set originally to the next web ', () => {
      wrapper = shallow(<Content />);
      expect(wrapper.state().source).toEqual("the-next-web");
    });

    it('confirms that source state changes when set', () => {
      wrapper = shallow(<Content />);
      wrapper.setState({
        source: "cnn",
      });
      expect(wrapper.state().source).toEqual('cnn');
    });
  })

})
