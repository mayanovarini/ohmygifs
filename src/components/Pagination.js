import React from 'react';
import PropTypes from 'prop-types';

// Pagination displays buttons to navigate through pages of results
const Pagination = (props) => {
  return (
    <div className="Pagination">
      { props.showPrevious
        ? <div className="FullPagination">
            <button className="Previous" onClick={props.previousGiphy}>Previous</button>
            <button className="Next" onClick={props.nextGiphy}>Next</button>
          </div>
        : <button className="Next" onClick={props.nextGiphy}>Next</button>
      }
    </div>
  );
}

Pagination.propTypes = {
  nextGiphy: PropTypes.func.isRequired,
  previousGiphy: PropTypes.func.isRequired,
  showPrevious: PropTypes.bool.isRequired
}

export default Pagination;
