import axios from 'axios';

async function createApiRequest(searchQuery, page) {
  const perPage = 12;

  const options = {
    method: 'GET',
    url: 'https://pixabay.com/api/',
    params: {
      key: `40910159-4d501b12f705b7e79a4470018`,
      q: `${searchQuery}`,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: `${page}`,
      per_page: `${perPage}`,
    },
  };
  const response = await axios(options);
  return response.data;
}
export default createApiRequest;
