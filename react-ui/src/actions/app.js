import Swal from 'sweetalert2';
import { fetchWithOutToken, fetchWithToken } from '../helpers/fetch';
import { closeAllModal, finishLoading, startLoading } from './ui';

const { types } = require('../types/types');

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  },
});

const getApps = (apps) => ({
  type: types.appGet,
  payload: apps,
});

const getCategories = (categories) => ({
  type: types.appGetCategories,
  payload: categories,
});

const editApp = (app) => ({
  type: types.appEdit,
  payload: app,
});

const addApp = (app) => ({
  type: types.appAdd,
  payload: app,
});

export const startGetApps = () => {
  return async (dispatch) => {
    dispatch(startLoading('APPS'));
    try {
      const body = await fetchWithOutToken('/app', 'GET');
      const res = await body.json();

      if (res.ok) {
        dispatch(getApps(res.apps));
      }
    } catch (error) {
      console.log(error);
    }
    dispatch(finishLoading('APPS'));
  };
};

export const startGetCategories = () => {
  return async (dispatch) => {
    dispatch(startLoading('CATEGORIES'));
    try {
      const body = await fetchWithOutToken('/category', 'GET');
      const res = await body.json();

      if (res.ok) {
        dispatch(getCategories(res.categories));
      }
    } catch (error) {
      console.log(error);
    }
    dispatch(finishLoading('CATEGORIES'));
  };
};

export const startEditApp = (app) => {
  return async (dispatch) => {
    dispatch(startLoading('EDIT'));
    try {
      const body = await fetchWithToken('/app', 'PUT', { ...app });
      const res = await body.json();

      if (res.ok) {
        dispatch(editApp(app));
        Toast.fire({
          icon: 'success',
          title: 'Su aplicacion se actualizo con exito!',
        });
      } else {
        Toast.fire({
          icon: 'error',
          title: 'Ha ocurrido un error, porfavor intentelo denuevo',
        });
      }
    } catch (error) {
      console.log(error);
    }
    dispatch(finishLoading('EDIT'));
    dispatch(closeAllModal());
  };
};

export const startAddApp = (app) => {
  return async (dispatch) => {
    dispatch(startLoading('ADD'));
    try {
      const body = await fetchWithToken('/app', 'POST', app);
      const { ok, msg, ...newApp } = await body.json();

      if (ok) {
        dispatch(addApp(newApp));
        Toast.fire({
          icon: 'success',
          title: 'Ha creado una aplicacion con exito!',
        });
      } else {
        Toast.fire({
          icon: 'error',
          title: 'Ha ocurrido un error, porfavor intentelo denuevo',
        });
      }
    } catch (error) {
      console.log(error);
    }
    dispatch(finishLoading('ADD'));
    dispatch(closeAllModal());
  };
};
