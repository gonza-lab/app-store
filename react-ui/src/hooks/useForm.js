import { useCallback, useState } from 'react';

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const reset = useCallback(
    (valueReset = initialState) => {
      setValues(valueReset);
    },
    [initialState]
  );

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  return [values, handleInputChange, reset];
};