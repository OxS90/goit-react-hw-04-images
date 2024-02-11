import { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import createApiRequest from '../ApiRequest';
import ImageGallery from '../ImageGallery/ImageGallery';
import styles from './App.module.css';
import Button from '../Button/Button';
import Loader from '../Loader';

class App extends Component {
  state = {
    query: '',
    page: 1,
    imagesList: [],
    loading: false,
    areImages: false,
    error: null,
  };

  componentDidUpdate(_prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.fetchImages();
    }
  }

  async fetchImages() {
    this.setState({ loading: true });
    try {
      const images = await createApiRequest(this.state.query, this.state.page);
      const newImages = images.hits.map(image => ({
        id: image.id,
        webformatURL: image.webformatURL,
        largeImageURL: image.largeImageURL,
      }));
      this.setState(prevState => ({
        imagesList: [...prevState.imagesList, ...newImages],
        areImages: images.totalHits > prevState.imagesList.length,
      }));
      this.setState({ loading: false });
    } catch (error) {
      this.setState({ error });
    } finally {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  handleClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ query: event.target[1].value, page: 1, imagesList: [] });
    document.querySelector('input').value = '';
  };

  render() {
    const { loading, imagesList, areImages, page } = this.state;

    return (
      <div className={styles.app}>
        <SearchBar onSubmit={this.handleSubmit} />
        {loading && <Loader />}
        <ImageGallery imagesGallery={imagesList} />
        {areImages && <Button onClickFunction={this.handleClick} />}
        {!areImages &&
          page === 1 &&
          this.state.query &&
          this.state.imagesList.length === 0 && (
            <p>
              <br /> Your search did not match any images.
            </p>
          )}
        {!areImages && page > 1 && (
          <p>
            <br /> You have reached the end of the search results.
          </p>
        )}
      </div>
    );
  }
}

export default App;
