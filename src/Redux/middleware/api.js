import axios from 'axios';
import { API_REQUEST } from './../actions/api-action';

export const apiCall = ({
  url = 'https://shopserver.firebaseapp.com',
  endpoint = '',
  method = 'GET',
  body = {},
  headers = {},
}) => {
  return new Promise((resolve, reject) => {
    axios({
      url: `https://shopserver.firebaseapp.com${endpoint}`,
      method,
      data: body,
    })
      .then((responce) => resolve(responce))
      .catch((err) => reject(err));
  });
};

export default (state) => (next) => (action) => {
  if (action.type !== API_REQUEST || !action.apiData) return next(action);
  const { url, endpoint, method, body, headers, types } = action.apiData;

  next({ type: types.REQUEST });

  const onSuccess = (responce) => {
    const resp = responce.data.products;
    next({ type: types.SUCCESS, resp });
  };

  const onError = (err) => {
    const errorType = '';
    if (err.data && err.status === 401) {
      errorType = 'Unauthorised';
    }
    next({ type: types.FAIL, errorType });
  };

  apiCall({ url, endpoint, method, body, headers })
    .then(onSuccess, onError)
    .catch((err) => console.log('ERROR', err));
};
