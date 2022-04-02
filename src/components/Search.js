import React, { Component } from 'react'

const welcome = {
    greeting: 'Hey',
    title: 'React',
};

class Search extends Component {
  render() {
    return (
        <div>
        <h1>
        {welcome.greeting} {welcome.title}
        </h1>
        <label htmlFor="search">Search: </label>
        <input id="search" type="text" />
    </div>
    )
  }
}

export default Search;