import request from './axios.instance';
import { Alert } from './Alert';

const postApiCall = (endPoint, params, successCallback, errorCallback) => {
  request
    .post(endPoint, params)
    .then((response) => {
      successCallback(response);
    })
    .catch((error) => {
      if (!navigator.onLine) {
        Alert(4, 'No internet connection');
        return;
      }
      if (error) {
        errorCallback(error);
      }
      if (!error) {
        let payload = {
          data: {
            statusCode: '',
            message: 'Please try again later'
          }
        };
        errorCallback(payload);
      }
    });
};

const getApiCall = (endPoint, params = '', successCallback, errorCallback) => {
  request
    .get(endPoint + params, {})
    .then((response) => {
      successCallback(response);
    })
    .catch((error) => {
      if (!navigator.onLine) {
        Alert(4, 'No internet connection');
        return;
      }
      if (error.code === 'ECONNABORTED') {
        let payload = {
          data: {
            statusCode: 408
          }
        };
        errorCallback(payload);
      } else if (error.response) {
        Alert(error.response.data);
      } else if (!error.response) {
        let payload = {
          data: {
            statusCode: '',
            message: 'Please try again later'
          }
        };
        errorCallback(payload);
      }
    });
};

const deleteApiCall = (endPoint, params = '', successCallback, errorCallback) => {
  request
    .delete(endPoint + params, {})
    .then((response) => {
      successCallback(response);
    })
    .catch((error) => {
      if (!navigator.onLine) {
        Alert(4, 'No internet connection');
        return;
      }
      if (error.code === 'ECONNABORTED') {
        let payload = {
          data: {
            statusCode: 408
          }
        };
        errorCallback(payload);
      } else if (error.response) {
        Alert(error.response.data);
      } else if (!error.response) {
        let payload = {
          data: {
            statusCode: '',
            message: 'Please try again later'
          }
        };
        errorCallback(payload);
      }
    });
};

const logoutApiCall = (endPoint, params = '', successCallback, errorCallback) => {
  request
    .delete(endPoint + params, {})
    .then((response) => {
      successCallback(response);
      Alert(response);
    })
    .catch((error) => {
      if (!navigator.onLine) {
        Alert(4, 'No internet connection');
      }
      if (error) {
        errorCallback(error);
      } else if (error.response) {
        Alert(error.response.data);
      }
    });
};

export const api = {
  getApiCall,
  postApiCall,
  deleteApiCall,
  logoutApiCall
};
