import React from 'react';
import PropTypes from 'prop-types';

const Footer = (props) => {
  return (
    <div className="Footer">
      { props.giphyData.length > 1
        ? <h3>Enjoy looking for <span>{props.query}</span> gifs?</h3>
        : <h3>I hope you will enjoy <img alt="logo" src="/logo.png"/></h3>
      }
      <p>Feel free to submit any feedback to iam@mayanovarini.com</p>
    </div>
  )
}

Footer.propTypes = {
  giphyData: PropTypes.array.isRequired,
  query: PropTypes.string.isRequired
}

export default Footer;
