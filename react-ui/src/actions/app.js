import { fetchWithOutToken } from '../helpers/fetch';

const { types } = require('../types/types');

const getApps = (apps) => ({
  type: types.appGet,
  payload: apps,
});

export const startGetApps = () => {
  return async (dispatch) => {
    try {
      const body = await fetchWithOutToken('/app', 'GET');
      const res = await body.json();

      if (res.ok) {
        dispatch(getApps(res.apps));
      }
    } catch (error) {
      console.log(error);
    }
  };
};
