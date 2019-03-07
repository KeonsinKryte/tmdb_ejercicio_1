import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        return (
            <div className="form-group">
                <label htmlFor="mainInput">Search</label>
                <input
                onInput={(event) => {
                    this.props.onSearch(event.target.value);
                }}
                type="text"
                className="form-control"
                id="mainInput"
                placeholder="Search your movie..."/>
            </div>
        );
    }
}

export default SearchBar;