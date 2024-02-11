import { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import styles from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  state = {
    isModalVisible: false,
  };

  static propTypes = {
    imageObject: PropTypes.object.isRequired,
  };

  handleClick = () => {
    this.setState({ isModalVisible: true });
  };

  handleClose = () => {
    this.setState({ isModalVisible: false });
  };

  render() {
    const { webformatURL, largeImageURL } = this.props.imageObject;
    return (
      <>
        <li className={styles.imageGalleryItem}>
          <img src={webformatURL} onClick={this.handleClick} alt="" />
        </li>
        {this.state.isModalVisible && (
          <Modal imageURL={largeImageURL} onClick={this.handleClose} />
        )}
      </>
    );
  }
}
export default ImageGalleryItem;
