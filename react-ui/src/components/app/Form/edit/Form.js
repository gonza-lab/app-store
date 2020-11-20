import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from '../../../../hooks/useForm';
import { UiCard } from '../../../ui/card/Card';
import { UiFormGroup } from '../../../ui/form/group/Group';
import { UiFormInput } from '../../../ui/form/input/Input';
import { UiButton } from '../../../ui/button/UiButton';
import { useDispatch, useSelector } from 'react-redux';

import validator from 'validator';

import './Form.scss';
import { startEditApp, startRemoveApp } from '../../../../actions/app';

export const AppFormEdit = ({ app }) => {
  const [values, setFormValues] = useForm({
    price: app.price,
    logo: app.logo,
  });

  const { thingsIsLoading } = useSelector((state) => state.ui);

  const [msgError, setMsgError] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    if (!validator.isURL(values.logo)) {
      setMsgError('Debe ingresar la URL  de su logo');
    } else {
      setMsgError('');
    }
  }, [values.logo]);

  const handleSaveApp = (e) => {
    e.preventDefault();
    dispatch(startEditApp({ ...values, _id: app._id }));
  };

  const handleRemoveApp = () => {
    dispatch(startRemoveApp(app));
  };

  return (
    <UiCard
      title="Edit"
      i={{ icon: 'far fa-trash-alt', onClick: handleRemoveApp }}
    >
      <form
        className={`app-form${
          thingsIsLoading.indexOf('EDIT') > -1 ? ' app-form__loading' : ''
        }`}
        onSubmit={handleSaveApp}
      >
        <UiFormGroup>
          <UiFormInput
            value={values.price}
            labelText="Precio"
            placeholder="Ingrese el precio de su app"
            onChange={setFormValues}
            name="price"
            type="number"
            required
          />
        </UiFormGroup>
        <UiFormGroup>
          <UiFormInput
            value={values.logo}
            labelText="Logo"
            placeholder="Ingrese el logo de su app"
            onChange={setFormValues}
            name="logo"
            msgError={msgError}
            required
          />
        </UiFormGroup>
        <UiButton
          theme="blue"
          type="submit"
          disabled={thingsIsLoading.indexOf('EDIT') > -1}
        >
          Guardar
        </UiButton>
      </form>
    </UiCard>
  );
};

AppFormEdit.propTypes = {
  app: PropTypes.object,
};
