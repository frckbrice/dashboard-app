import React from 'react'

const useDatum = (key) => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  };

  function getFormValues() {
    const storedValues = localStorage.getItem('key');
    if (!storedValues)
      return {
        initialValues,
      };
    return JSON.parse(storedValues);
  }

  return getFormValues();
};

export default useDatum
