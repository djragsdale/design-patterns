import axios from 'axios';

import config from '../../config.cjs';

const {
  userApiKey,
} = config();

async function get(baseURL, data) {
  return axios.get(baseURL, {
    params: {
      ...data,
      key: userApiKey,
    },
  }).then((response) => response.data);
}

async function post(baseURL, data) {
  return axios.post(`${baseURL}?key=${userApiKey})`, data).then((response) => response.data);
}

export default {
  get,
  post,
};
