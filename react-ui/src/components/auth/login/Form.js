import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLogin } from '../../../actions/auth';
import { openModalSigin } from '../../../actions/ui';
import { useForm } from '../../../hooks/useForm';
import { UiButton } from '../../ui/button/UiButton';
import { UiCard } from '../../ui/card/Card';
import { UiFormGroup } from '../../ui/form/group/Group';
import { UiFormInput } from '../../ui/form/input/Input';

import './Form.scss';

export const AuthLoginForm = () => {
  const [values, setValuesForm] = useForm({
    email: '',
    password: '',
  });

  const { thingsIsLoading } = useSelector((state) => state.ui);

  const dispatch = useDispatch();

  const handleOpenModalSigIn = (e) => {
    e.preventDefault();
    dispatch(openModalSigin());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(startLogin(values));
  };

  return (
    <UiCard
      footer={
        <a
          href="./"
          className="auth-login-form__footer"
          onClick={handleOpenModalSigIn}
        >
          Necesitas una cuenta? Registrate!
        </a>
      }
      title="Login"
    >
      <form
        onSubmit={handleSubmit}
        className={`auth-login-form${
          thingsIsLoading.indexOf('AUTH') > -1
            ? ' auth-login-form__loading'
            : ''
        }`}
      >
        <UiFormGroup>
          <UiFormInput
            value={values.email}
            labelText="Email"
            placeholder="Ingrese su email"
            onChange={setValuesForm}
            name="email"
            type="email"
            required
          />
        </UiFormGroup>
        <UiFormGroup>
          <UiFormInput
            value={values.password}
            labelText="Password"
            placeholder="Ingrese su contraseña"
            onChange={setValuesForm}
            name="password"
            type="password"
            required
          />
        </UiFormGroup>
        <UiButton
          theme="blue"
          type="submit"
          disabled={thingsIsLoading.indexOf('AUTH') > -1}
        >
          Login
        </UiButton>
      </form>
    </UiCard>
  );
};
