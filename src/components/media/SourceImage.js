import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ image }) => {
  if (!image) {
    return null;
  }

  return <img src={image.url} alt={image.alt} className="img-fluid" />;
};

Image.propTypes = {
  image: PropTypes.object,
};

export default Image;
