import { useState, useEffect, useCallback } from 'react';

const useForm = (callback, validate) => {

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isInputed, setIsInputed] = useState(false);

  useEffect(() => {
    if (Object.keys(values).length !== 0) {
      setErrors(validate(values));
    }
  }, [values, validate])

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    callback(values);
  };

  const handleChange = (event) => {
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
    setIsInputed(true);
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsInputed = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsInputed(newIsInputed);
    },
    [setValues, setErrors, setIsInputed]
  );

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
    isInputed,
    resetForm
  }
};

export default useForm;