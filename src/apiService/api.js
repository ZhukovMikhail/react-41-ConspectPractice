import axios from 'axios';

export const fetchArticle = async query => {
  const responce = await axios.get(`/search?query=${query}`);
  return responce.data.hits;
};
