import Swal from 'sweetalert2';
import { closeAllModal, toggleFormLoading } from './ui';

const { fetchWithOutToken } = require('../helpers/fetch');
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

export const login = ({ _id, name }) => ({
  type: types.authLogin,
  payload: { _id, name },
});

export const logout = () => ({
  type: types.authLogout,
});

export const startLogin = (user) => {
  return async (dispatch) => {
    try {
      dispatch(toggleFormLoading());
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

      dispatch(toggleFormLoading());
    } catch (error) {
      console.log(error);
    }
  };
};

export const startRegister = (user) => {
  return async (dispatch) => {
    try {
      dispatch(toggleFormLoading());
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

      dispatch(toggleFormLoading());
    } catch (error) {
      console.log(error);
    }
  };
};
