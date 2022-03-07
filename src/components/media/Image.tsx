import React, { FC } from 'react';
import classnames from 'classnames';
import styles from './Image.module.scss';

const Image: FC<IImage> = ({ image, className }) => {
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

export default Image;
