import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startRegister } from '../../../actions/auth';
import { openModalLogin } from '../../../actions/ui';
import { useForm } from '../../../hooks/useForm';
import { UiButton } from '../../ui/button/UiButton';
import { UiCard } from '../../ui/card/Card';
import { UiFormCheck } from '../../ui/form/check/Check';
import { UiFormGroup } from '../../ui/form/group/Group';
import { UiFormInput } from '../../ui/form/input/Input';

import './Form.scss';

export const AuthSiginForm = () => {
  const [values, setFormValues] = useForm({
    fName: '',
    lName: '',
    email: '',
    password: '',
    cPassword: '',
    isDev: false,
  });

  const { thingsIsLoading } = useSelector((state) => state.ui);

  const [msgError, setMsgError] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    const { password, cPassword } = values;
    if (cPassword !== password) {
      setMsgError('Las contraseñas deben ser iguales');
    } else {
      setMsgError('');
    }
  }, [values.cPassword, values.password]);

  const handleOpenModalLogin = (e) => {
    e.preventDefault();
    dispatch(openModalLogin());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      startRegister({ ...values, name: values.fName + ' ' + values.lName })
    );
  };

  return (
    <UiCard
      footer={
        <a
          href="./"
          className="auth-sigin-form__footer"
          onClick={handleOpenModalLogin}
        >
          Ya tenes una cuenta? Logeate!
        </a>
      }
      title="Sigin"
    >
      <form
        onSubmit={handleSubmit}
        className={`auth-sigin-form${
          thingsIsLoading.indexOf('AUTH') > -1
            ? ' auth-sigin-form__loading'
            : ''
        }`}
      >
        <UiFormGroup>
          <UiFormInput
            onChange={setFormValues}
            value={values.fName}
            labelText="Nombre"
            name="fName"
            placeholder="Ingresa tu nombre"
            required
          />
          <UiFormInput
            onChange={setFormValues}
            value={values.lName}
            labelText="Apellido"
            name="lName"
            placeholder="Ingresa tu apellido"
          />
        </UiFormGroup>
        <UiFormGroup>
          <UiFormInput
            onChange={setFormValues}
            value={values.email}
            labelText="Email"
            name="email"
            placeholder="Ingresa tu email"
            type="email"
            required
          />
        </UiFormGroup>
        <UiFormGroup>
          <UiFormInput
            onChange={setFormValues}
            value={values.password}
            labelText="Contraseña"
            name="password"
            placeholder="Ingresa tu contraseña"
            type="password"
            required
          />
          <UiFormInput
            onChange={setFormValues}
            value={values.cPassword}
            labelText="Confirma la contraseña"
            name="cPassword"
            placeholder="Ingresa tu contraseña nuevamente"
            msgError={msgError}
            type="password"
            required
          />
        </UiFormGroup>
        <UiFormGroup>
          <UiFormCheck
            checked={values.isDev}
            onChange={() =>
              setFormValues({ target: { name: 'isDev', value: !values.isDev } })
            }
            labelText="Desarrollador"
            name="isDev"
          />
        </UiFormGroup>
        <UiButton
          theme="blue"
          type="submit"
          disabled={thingsIsLoading.indexOf('AUTH') > -1}
        >
          Sigin
        </UiButton>
      </form>
    </UiCard>
  );
};
