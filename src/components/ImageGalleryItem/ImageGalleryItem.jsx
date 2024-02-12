import { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = props => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleClick = () => {
    setIsModalVisible(true);
  };

  const handleClose = () => {
    setIsModalVisible(false);
  };

  const { webformatURL, largeImageURL } = props.imageObject;
  return (
    <>
      <li className={styles.imageGalleryItem}>
        <img src={webformatURL} onClick={handleClick} alt="" />
      </li>
      {isModalVisible && (
        <Modal imageURL={largeImageURL} onClick={handleClose} />
      )}
    </>
  );
};

ImageGalleryItem.propTypes = {
  imageObject: PropTypes.object.isRequired,
};

export default ImageGalleryItem;
