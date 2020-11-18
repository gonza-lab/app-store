import { fetchWithOutToken } from '../helpers/fetch';

const { types } = require('../types/types');

const getApps = (apps) => ({
  type: types.appGet,
  payload: apps,
});

const getCategories = (categories) => ({
  type: types.appGetCategories,
  payload: categories,
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

export const startGetCategories = () => {
  return async (dispatch) => {
    try {
      const body = await fetchWithOutToken('/category', 'GET');
      const res = await body.json();

      if (res.ok) {
        dispatch(getCategories(res.categories));
      }
    } catch (error) {
      console.log(error);
    }
  };
};
