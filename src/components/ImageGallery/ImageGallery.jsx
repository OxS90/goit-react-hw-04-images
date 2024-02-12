import PropTypes from 'prop-types';
import styles from './ImageGallery.module.css';
import ImagesGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { nanoid } from 'nanoid';

const ImageGallery = props => {
  const { imagesGallery } = props;
  return (
    <ul className={styles.imageGallery}>
      {imagesGallery.map(image => {
        return <ImagesGalleryItem key={nanoid()} imageObject={image} />;
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  imagesGallery: PropTypes.array.isRequired,
};

export default ImageGallery;
