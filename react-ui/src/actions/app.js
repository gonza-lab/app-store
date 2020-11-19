import { fetchWithOutToken } from '../helpers/fetch';
import { finishLoading, startLoading } from './ui';

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
    dispatch(startLoading());
    try {
      const body = await fetchWithOutToken('/app', 'GET');
      const res = await body.json();

      if (res.ok) {
        dispatch(getApps(res.apps));
      }
    } catch (error) {
      console.log(error);
    }
    dispatch(finishLoading());
  };
};

export const startGetCategories = () => {
  return async (dispatch) => {
    dispatch(startLoading());
    try {
      const body = await fetchWithOutToken('/category', 'GET');
      const res = await body.json();

      if (res.ok) {
        dispatch(getCategories(res.categories));
      }
    } catch (error) {
      console.log(error);
    }
    dispatch(finishLoading());
  };
};
