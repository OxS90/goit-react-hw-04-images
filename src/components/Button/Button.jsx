import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = props => {
  return (
    <button className={styles.button} onClick={props.onClickFunction}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onClickFunction: PropTypes.func.isRequired,
};

export default Button;
