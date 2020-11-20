import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../../../hooks/useForm';

import { UiButton } from '../../../ui/button/UiButton';
import { UiCard } from '../../../ui/card/Card';
import { UiFormGroup } from '../../../ui/form/group/Group';
import { UiFormInput } from '../../../ui/form/input/Input';
import { UiFormSelect } from '../../../ui/form/select/Select';

import validator from 'validator';
import { startAddApp } from '../../../../actions/app';

export const AppFormNew = () => {
  const { thingsIsLoading } = useSelector((state) => state.ui);
  const { categories } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  const [values, setFormValues] = useForm({
    category: categories[0]._id,
    name: '',
    price: 0,
    logo: '',
  });

  const [msgError, setMsgError] = useState('');

  useEffect(() => {
    if (!validator.isURL(values.logo)) {
      setMsgError('Debe ingresar la URL de su logo');
    } else {
      setMsgError('');
    }
  }, [values.logo]);

  const handleAddApp = (e) => {
    e.preventDefault();
    dispatch(startAddApp(values));
  };

  return (
    <UiCard title="New app">
      <form
        className={`app-form${
          thingsIsLoading.indexOf('ADD') > -1 ? ' app-form__loading' : ''
        }`}
        onSubmit={handleAddApp}
      >
        <UiFormGroup>
          <UiFormInput
            value={values.name}
            labelText="Nombre"
            placeholder="Ingrese el nombre de su aplicacion"
            onChange={setFormValues}
            name="name"
            required
          />
          <UiFormInput
            value={values.price}
            labelText="Precio"
            placeholder="Ingrese el precio"
            onChange={setFormValues}
            name="price"
            required
          />
        </UiFormGroup>
        <UiFormGroup>
          <UiFormSelect
            options={categories.map((category) => ({
              value: category._id,
              text: category.name,
            }))}
            labelText="Categoria"
            name="category"
            value={values.category}
            onChange={setFormValues}
          />
          <UiFormInput
            value={values.logo}
            labelText="Logo"
            placeholder="Ingrese la URL de tu logo"
            onChange={setFormValues}
            name="logo"
            msgError={msgError}
            required
          />
        </UiFormGroup>
        <UiButton
          theme="blue"
          type="submit"
          disabled={thingsIsLoading.indexOf('ADD') > -1}
        >
          Guardar
        </UiButton>
      </form>
    </UiCard>
  );
};
