import axios from 'axios';

const BACKEND_URL = 'http://api.openweathermap.org/data/2.5';
const REQUEST_TIMEOUT = 3000;

const createAPI = () => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export {
  createAPI
};
