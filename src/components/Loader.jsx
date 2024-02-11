import { Audio } from 'react-loader-spinner';
import { Component } from 'react';

class Loader extends Component {
  render() {
    return (
      <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    );
  }
}
export default Loader;
