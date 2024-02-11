import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGallery.module.css';
import ImagesGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { nanoid } from 'nanoid';

class ImageGallery extends Component {
  static propTypes = {
    imagesGallery: PropTypes.array.isRequired,
  };

  render() {
    const { imagesGallery } = this.props;
    return (
      <ul className={styles.imageGallery}>
        {imagesGallery.map(image => {
          return <ImagesGalleryItem key={nanoid()} imageObject={image} />;
        })}
      </ul>
    );
  }
}
export default ImageGallery;
