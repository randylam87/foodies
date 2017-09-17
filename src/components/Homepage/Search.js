import React, { Component } from 'react';

export default class Search extends Component {
  render() {
    return (
      <form id="search-container" onSubmit={ this.props.handleSubmit }>
        <input onChange={ this.props.handleChange } value={ this.props.value } className="rounded pl-2" type="text" id="search-bar" placeholder="Enter Address" />
        <button id='search-icon' type='submit' alt="search-button"> <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </form>
    )
  }
}
;
