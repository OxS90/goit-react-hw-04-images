import { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import createApiRequest from '../ApiRequest';
import ImageGallery from '../ImageGallery/ImageGallery';
import styles from './App.module.css';
import Button from '../Button/Button';
import Loader from '../Loader';

const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(0);
  const [imagesList, setImagesList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [areImages, setAreImages] = useState(false);

  useEffect(() => {
    fetchImages();
  }, [query, page]);

  async function fetchImages() {
    setLoading(true);
    try {
      const images = await createApiRequest(query, page);
      const newImages = images.hits.map(image => ({
        id: image.id,
        webformatURL: image.webformatURL,
        largeImageURL: image.largeImageURL,
      }));
      setImagesList(imagesList => [...imagesList, ...newImages]);
      setAreImages(images.totalHits > imagesList.length);
    } catch (error) {
      console.log('Error:', error);
    } finally {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
      setLoading(false);
    }
  }

  const handleClick = () => {
    setPage(page => page + 1);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setQuery(event.target[1].value);
    setPage(1);
    setImagesList([]);
    document.querySelector('input').value = '';
  };

  return (
    <div className={styles.app}>
      <SearchBar onSubmit={handleSubmit} />
      {loading && <Loader />}
      <ImageGallery imagesGallery={imagesList} />
      {areImages && <Button onClickFunction={handleClick} />}
      {!areImages && page === 1 && query && imagesList.length === 0 && (
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
};

export default App;
