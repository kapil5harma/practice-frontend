import axios from 'axios';
import Cookie from 'js-cookie';

export const rootConfig = {
  BASE_URL: 'http://localhost:3000'
};

const AXIOS_INSTANCE = axios.create({
  baseURL: rootConfig.BASE_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    Accept: 'application/vnd.api+json',
    Authorization: Cookie.get('token') ? `Bearer ${Cookie.get('token')}` : null
  },
  withCredentials: false
});

AXIOS_INSTANCE.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      Cookie.remove('token');
      AXIOS_INSTANCE.defaults.headers.Authorization = null;
      window.location.reload();
    }
    return Promise.reject(error);
  }
);

export const apiEndpoints = {
  login: `${rootConfig.BASE_URL}/auth/signin`,
  signup: `${rootConfig.BASE_URL}/auth/signup`,
  logout: `${rootConfig.BASE_URL}/auth/signout`,
  profile: `${rootConfig.BASE_URL}/auth/profile`,
  update: `${rootConfig.BASE_URL}/auth/update`
};

export { AXIOS_INSTANCE };
