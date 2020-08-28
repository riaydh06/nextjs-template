import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Image.module.scss';

const Image = ({ image, className }) => {
  if (!image) {
    return null;
  }

  return (
    <div
      style={{ backgroundImage: 'url(' + image.url + ')' }}
      className={classnames(styles['image'], { [className]: !!className })}
      title={image.title}
    ></div>
  );
};

Image.propTypes = {
  image: PropTypes.object,
};

export default Image;
