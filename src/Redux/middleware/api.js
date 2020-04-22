import axios from 'axios';
import { API_REQUEST } from './../actions/api-action';
import { merge } from 'lodash';

export const apiCall = ({
  url = 'https://shopserver.firebaseapp.com',
  endpoint = '',
  method = 'GET',
  body = {},
  headers = {},
}) => {
  // const methodUpgrated = method.toLowerCase();

  console.log('url>>>>>', url);
  // axios.create({
  //   baseURL: url,
  //   headers,
  // });

  return new Promise((resolve, reject) => {
    // resolve === всё ОК; reject === всё плохо
    axios({
      url: `https://shopserver.firebaseapp.com${endpoint}`,
      method,
      data: body,
    })
      .then((responce) => resolve(responce))
      .catch((err) => reject(err));
  });
};

const nextAction = (action, data) => {
  const next = merge({}, action, data);
  console.log('nextAction -> next', next);
  delete next[API_REQUEST];
  return next;
};

export default (state) => (next) => (action) => {
  // next то же самое что и dispath

  if (action.type === API_REQUEST && !action.apiData) next(action);
  console.log('action>>>>>>api', action);
  const { url, endpoint, method, body, headers, types } = action.apiData; //перехватываем apiCall из api-action

  next({ type: types.REQUEST });

  const onSuccess = (responce) => {
    const resp = responce.data;
    next({ type: types.SUCCESS, ...resp });
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
    .catch((err) => console.log('err>>>>>>', err));
};
