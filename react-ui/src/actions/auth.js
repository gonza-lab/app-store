import Swal from 'sweetalert2';
import { closeAllModal, finishLoading, startLoading } from './ui';

const { fetchWithOutToken, fetchWithToken } = require('../helpers/fetch');
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

export const login = ({ _id, name, isDev, apps }) => ({
  type: types.authLogin,
  payload: { _id, name, isDev, apps },
});

export const logout = () => ({
  type: types.authLogout,
});

export const buyApp = (app) => ({
  type: types.authBuyApp,
  payload: app._id,
});

export const removeApp = (app) => ({
  type: types.authRemoveApp,
  payload: app._id,
});

export const startLogin = (user) => {
  return async (dispatch) => {
    try {
      dispatch(startLoading('AUTH'));
      const { password, email } = user;
      const res = await fetchWithOutToken('/auth/login', 'POST', {
        password,
        email,
      });

      const userDB = await res.json();

      if (userDB.ok) {
        dispatch(login(userDB));
        localStorage.setItem('x-token', userDB.token);
        Toast.fire({ icon: 'success', title: 'Logeado con exito' });
        dispatch(closeAllModal());
      } else {
        Toast.fire({
          icon: 'error',
          title: 'Error al logearse, intentelo denuevo.',
        });
      }

      dispatch(finishLoading('AUTH'));
    } catch (error) {
      console.log(error);
    }
  };
};

export const startRegister = (user) => {
  return async (dispatch) => {
    try {
      dispatch(startLoading('AUTH'));
      const { email, password, isDev, name } = user;

      const res = await fetchWithOutToken('/auth/register', 'POST', {
        email,
        password,
        isDev,
        name,
      });

      const userDB = await res.json();

      if (userDB.ok) {
        dispatch(login(userDB));
        localStorage.setItem('x-token', userDB.token);
        Toast.fire({ icon: 'success', title: 'Registro exitoso' });
        dispatch(closeAllModal());
      } else {
        Toast.fire({
          icon: 'error',
          title: 'Error al registrarse, intentelo denuevo.',
        });
      }

      dispatch(finishLoading('AUTH'));
    } catch (error) {
      console.log(error);
    }
  };
};

export const startBuyApp = (app) => {
  return async (dispatch, getState) => {
    const { isLogged, isDev } = getState().auth;

    if (!isLogged) {
      Toast.fire({
        icon: 'error',
        title: 'Debes estar logeado para poder adquirir una app',
      });
    } else if (isDev) {
      Toast.fire({
        icon: 'error',
        title: 'Eres un desarrollador, no puedes adquirir apps',
      });
    } else {
      dispatch(startLoading('BUY'));
      const body = await fetchWithToken('/buy', 'POST', { _id: app._id });
      const res = await body.json();

      if (res.ok) {
        dispatch(buyApp(app));
        Toast.fire({
          icon: 'success',
          title: `Felicitaciones! Has adquirido ${app.name}`,
        });
      } else {
        Toast.fire({
          icon: 'error',
          title: res.msg,
        });
      }

      dispatch(finishLoading('BUY'));
    }
  };
};

export const startRemoveApp = (app) => {
  return async (dispatch) => {
    try {
      const body = await fetchWithToken('/buy', 'DELETE', { _id: app._id });
      const res = await body.json();

      if (res.ok) {
        dispatch(removeApp(app));
        Toast.fire({
          icon: 'success',
          title: `Haz removido ${app.name} con exito`,
        });
      } else {
        Toast.fire({
          icon: 'error',
          title: 'Error al remover tu app, porfavor intentalo denuevo',
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
