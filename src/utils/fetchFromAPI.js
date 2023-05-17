import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};


/*const options = {
    method: 'GET',
    url: 'https://youtube-v31.p.rapidapi.com/captions',
    params: {
      part: 'snippet',
      videoId: 'M7FIvfx5J10'
    },
    headers: {
      'X-RapidAPI-Key': '5db62d401amsh739ca6cd3c4f412p195b98jsn7d1e952cfc09',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
*/
  