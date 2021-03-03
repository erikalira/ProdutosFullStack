const { NODE_ENV } = process.env;

const API_URL =
  NODE_ENV === 'production' ? window.API_URL : process.env.REACT_APP_API_URL;

export default API_URL;