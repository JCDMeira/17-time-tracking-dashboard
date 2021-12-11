import axios from 'axios';
import url from '../config/index';

export const api = axios.create({
  baseURL: `${url.URL_BACKEND}`,
});
