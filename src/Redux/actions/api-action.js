export const API_REQUEST = 'API-REQUEST';
export const apiActionCall = (apiData) => ({
  type: API_REQUEST,
  apiData,
});
