import React from 'react';
import PropTypes from 'prop-types';
import Pagination from './Pagination';

// GifList displays a grid of gifs from giphyData prop
const GifList = (props) => {
  return (
    <div>
      <div className="GifList">
        {
          props.giphyData.map(image => {
            return (
              <div className="Gif" key={image.id}>
                <img alt="each gif" src={image.imageSrc} />
              </div>
            );
          })
        }
      </div>
      { props.giphyData.length > 1
        ? <Pagination
            nextGiphy={props.nextGiphy}
            previousGiphy={props.previousGiphy}
            showPrevious={props.showPrevious}
          />
        : ''
      }
    </div>

  );
};

GifList.propTypes = {
  giphyData: PropTypes.array.isRequired,
  nextGiphy: PropTypes.func.isRequired,
  previousGiphy: PropTypes.func.isRequired,
  showPrevious: PropTypes.bool.isRequired
};

export default GifList;
