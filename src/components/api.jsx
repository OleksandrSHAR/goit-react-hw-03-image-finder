import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '38419998-1aa433a5d57de567849c42890';
export const getImg = async (search, page) => {
  const query = search.slice(search.length);
  const resp = await axios.get(
    `?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return resp.data;
};
