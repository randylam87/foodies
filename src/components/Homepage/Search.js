import React, { Component } from 'react';

export default class Search extends Component {
  render () {
    return (
    <form id="search-container" onSubmit={this.props.handleSubmit}>
      <input 
        onChange={this.props.handleChange}
        value={this.props.value}
        className="img-fluid rounded pl-2" 
        type="text" 
        id="search-bar" 
        placeholder="Enter Address"
      />

      <input 
        className="search-icon" 
        type='submit'
        src="./images/search.png" 
        width="35" 
        height="35"
        alt="search-button"
      />
    </form>
    )
  }
};
