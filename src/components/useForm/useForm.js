import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isInputed, setIsInputed] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback(values);
    } 
  }, [errors, callback, isSubmitting, values]);

  useEffect(() => {
    if (Object.keys(values).length !== 0) {
      setIsSubmitting(false);
      setErrors(validate(values));
    }
  }, [values, validate])

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const handleChange = (event) => {
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
    setIsInputed(true);
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
    isInputed
  }
};

export default useForm;