import AppDispatcher from '../src/dispatcher/AppDispatcher';
import appConstants from '../src/constants/AppConstants';
import newsStore from '../src/stores/NewsStore';

import React from "react";

describe('Application store', () => {
  it('Asserts sources is initially empty', () => {
    expect(newsStore.getSources()).toEqual([]);
  });
  it('Asserts sources is set', () => {
    newsStore.setSources(['name: techruch'])
    expect(newsStore.getSources()).toEqual(["name: techruch"]);
  });

  it('Asserts articles is set', () => {
    expect(newsStore.getArticles()).toEqual([]);
  });

  it('Asserts artcles is set', () => {
    newsStore.setArticles(['name: techruch'])
    expect(newsStore.getArticles()).toEqual(["name: techruch"]);
  });

  it("handles loadheadlines action", () => {
    let articles = [{
      "author": "Robert Hellson",
      "description": "Being a parent is one of the most wonderful feelings in this world. Seeing a child grow imbibing different skills is the dream of every parent. While living this dream, most of the ...",
      "publishedAt": "2017-05-24T21:02:21Z",
      "title": "5 Entrepreneurial Skills Parents Must Teach Their Child For Future",
      "url": "https://thenextweb.com/contributors/2017/05/24/5-entrepreneurial-skills-parents-must-teach-child-future/",
      "urlToImage": "https://cdn3.tnwcdn.com/wp-content/blogs.dir/1/files/2017/05/5-Entrepreneurial-Skills-Parents-Must-Teach-Their-Child-01.jpeg"
    }];
    AppDispatcher.dispatch({
      actionType: appConstants.LOAD_HEADLINES,
      data: articles
    });
    expect(newsStore.getArticles()).toEqual(articles);
  });

  it("handles onclickGetHeadlines action", () => {
    let articles = [{
      "author": "Robert Hellson",
      "description": "Being a parent is one of the most wonderful feelings in this world. Seeing a child grow imbibing different skills is the dream of every parent. While living this dream, most of the ...",
      "publishedAt": "2017-05-24T21:02:21Z",
      "title": "5 Entrepreneurial Skills Parents Must Teach Their Child For Future",
      "url": "https://thenextweb.com/contributors/2017/05/24/5-entrepreneurial-skills-parents-must-teach-child-future/",
      "urlToImage": "https://cdn3.tnwcdn.com/wp-content/blogs.dir/1/files/2017/05/5-Entrepreneurial-Skills-Parents-Must-Teach-Their-Child-01.jpeg"
    }];
    AppDispatcher.dispatch({
      actionType: appConstants.LOAD_HEADLINES,
      data: articles
    });
    expect(newsStore.getArticles()).toEqual(articles);
  });

  it("handles returnSources action", () => {
    let sources = [{
      "id": "abc-news-au",
      "name": "ABC News (AU)",
      "description": "Australia's most trusted source of local, national and world news. Comprehensive, independent, in-depth analysis, the latest business, sport, weather and more.",
      "url": "http://www.abc.net.au/news",
      "category": "general",
      "language": "en",
      "country": "au",
      "urlsToLogos": {
        "small": "",
        "medium": "",
        "large": ""
      },
      "sortBysAvailable": [
        "top"]
    },
    {
      "id": "al-jazeera-english",
      "name": "Al Jazeera English",
      "description": "News, analysis from the Middle East and worldwide, multimedia and interactives, opinions, documentaries, podcasts, long reads and broadcast schedule.",
      "url": "http://www.aljazeera.com",
      "category": "general",
      "language": "en",
      "country": "us",
      "urlsToLogos": {
        "small": "",
        "medium": "",
        "large": ""
      },
      "sortBysAvailable": [
        "top",
        "latest"
      ]
    }];
    AppDispatcher.dispatch({
      actionType: appConstants.GET_SOURCES,
      data: sources
    });
    expect(newsStore.getSources()).toEqual(sources);
  });

  it("handles change of sortBy action", () => {
    let sortBys = "top";
    AppDispatcher.dispatch({
      actionType: appConstants.GET_SORTBYS,
      data: sortBys
    });
    expect(newsStore.getSourceSortbys()).toEqual(sortBys);
  });

  it("handles change of sortBy action", () => {
    let sortBys = "top";
    AppDispatcher.dispatch({
      actionType: appConstants.GET_SORTBYS,
      data: sortBys
    });
    expect(newsStore.getSourceSortbys()).toEqual(sortBys);
  });

  it("handles update selected souce action", () => {
    let selectedSource = "abc";
    AppDispatcher.dispatch({
      actionType: appConstants.UPDATE_SOURCE,
      data: selectedSource
    });
    expect(newsStore.getSelectedSource()).toEqual(selectedSource);
  });

  it("handles updating selected category action", () => {
    let selectedCategory = "business";
    AppDispatcher.dispatch({
      actionType: appConstants.UPDATE_ARTICLE_SORT,
      data: selectedCategory
    });
    expect(newsStore.getSelectedDropDownSort()).toEqual(selectedCategory);
  });

});