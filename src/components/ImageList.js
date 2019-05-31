/* eslint-disable camelcase */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

const ImageList = (props) => {
  const images = props.images.map(({ id, urls, alt_description }) => (
    <img key={id} src={urls.regular} alt={alt_description} />
  ));
  return <div>{images}</div>;
};

export default ImageList;
