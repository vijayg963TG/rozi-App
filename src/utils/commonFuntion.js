export const getBaseUrl = () => {
  return process.env.REACT_APP_BASE_URL;
};

export const setTokenFromLS = (token) => {
  return localStorage.setItem('token', token);
};

export const getTokenFromLS = () => {
  return localStorage.getItem('token');
};
