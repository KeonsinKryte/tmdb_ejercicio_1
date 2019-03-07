import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import api from './api';
import SearchBar from './SearchBar';
import Card from './Card';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
      item: "",
    }
  }

  searchByTitle(search) {
    if (search.length < 3) {
      this.setState({ results: [] });
      return;
    }

    api.searchByTitle(search, (info) => {
      this.setState({
        results: info.results ? info.results: [],
        item: info.results[0] ? info.results: [0],
      });
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <SearchBar
            onSearch={(value) => {
              console.log(value);
              this.searchByTitle(value);
            }} />

          <Route path="/" exact
            render={() => <Card movie={this.state.item} />}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
