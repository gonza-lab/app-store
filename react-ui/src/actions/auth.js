const { fetchWithOutToken } = require('../helpers/fetch');
const { types } = require('../types/types');

const login = ({ _id, name }) => ({
  type: types.authLogin,
  payload: { _id, name },
});

export const logout = () => {
  localStorage.removeItem('x-token');

  return {
    type: types.authLogout,
  };
};

export const startLogin = (user) => {
  return async (dispatch) => {
    try {
      const { password, email } = user;
      const res = fetchWithOutToken('/auth/login', 'GET', {
        password,
        email,
      });

      const userDB = await res.json();

      if (userDB.ok) {
        dispatch(login(userDB));
        localStorage.setItem('x-token', userDB.token);
      } else {
        throw new Error(userDB.msg);
      }
    } catch (error) {
      console.log(error);
    }
  };
};
