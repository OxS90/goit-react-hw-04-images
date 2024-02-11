import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

class Button extends Component {
  render() {
    return (
      <button className={styles.button} onClick={this.props.onClickFunction}>
        Load more
      </button>
    );
  }
}
Button.propTypes = {
  onClickFunction: PropTypes.func.isRequired,
};
export default Button;
