import React, { Component } from "react";
import "./style.css";


class App extends Component {
fetchSearchTopStories(searchTerm, page = 0) { axios {'${PATH_BASE}{PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}'}
.then(result => this.setSearchTopStories(result.data))
.catch(erorr => this.setState({erorr}));
}
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );

export default "App";
