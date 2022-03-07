import React, { FC } from 'react';

const Image: FC<ISourceImage> = ({ image }) => {
  if (!image) {
    return null;
  }

  return <img src={image.url} alt={image.alt} className="img-fluid" />;
};

export default Image;
