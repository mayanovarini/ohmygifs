import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = (props) => {
  return (
    <div className="SearchBar">
      <input
        onChange={props.onChange}
        onKeyPress={props.onKeyPress}
        placeholder="Search Gif"
      />

      <div className="SearchBar-submit">
        <a onClick={() => props.searchGiphy()}>Search</a>
      </div>
    </div>
  )
};

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
  onKeyPress: PropTypes.func.isRequired,
  searchGiphy: PropTypes.func.isRequired
};

export default SearchBar;
