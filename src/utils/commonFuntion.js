export const getBaseUrl = () => {
  return process.env.REACT_APP_BASE_URL;
};

export const getTokenFromLS = () => {
  return localStorage.getItem('user_token');
};
