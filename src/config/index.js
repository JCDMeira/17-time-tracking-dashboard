const URL_BACKEND = window.location.hostname.includes('localhost')
  ? 'http://localhost:3333'
  : 'http://';

export default {
  URL_BACKEND,
};
