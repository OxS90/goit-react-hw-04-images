import { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

const Modal = props => {
  const handleKeyDown = event => {
    if (event.code === 'Escape') {
      props.onClick();
    }
  };

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      props.onClick();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className={styles.overlay} onClick={handleBackdropClick}>
      <div className={styles.modal}>
        <img src={props.imageURL} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  imageURL: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Modal;
