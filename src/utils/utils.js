export function filterCardsAccToInput(inputText, arr) {
  const resultsRU = arr.filter((item) => item.nameRU.includes(inputText));
  if (resultsRU.length === 0) {
    const resultsEN = arr.filter((item) => {
      if (item.nameEN !== null) {
        return item.nameEN.includes(inputText)
      }
      return '';
    });
    return resultsEN;
  }
  return resultsRU;
}

export function validateRegisterForm(values) {
  let errors = {};
  if (!values.name) {
    errors.name = 'Введите имя';
  } else if (values.name.length > 30 || values.name.length < 2) {
    errors.name = 'Имя должно быть от 2 до 30 символов';
  } else if (!/^[a-zA-Zа-яА-Я -]+$/.test(values.name)) {
    errors.name = 'Имя может содержать только латиницу, кириллицу, пробел или дефис';
  } 
  if (!values.email) {
    errors.email = 'Введите адрес электронной почты';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Некорректный адрес электронной почты';
  }
  if (!values.password) {
    errors.password = 'Введите пароль';
  } else if (values.password.length < 4) {
    errors.password = 'Пароль должен быть не менее 4 символов';
  }
  return errors;
};

export function validateLoginForm(values) {
  let errors = {};
  if (!values.email) {
    errors.email = 'Введите адрес электронной почты';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Некорректный адрес электронной почты';
  }
  if (!values.password) {
    errors.password = 'Введите пароль';
  } else if (values.password.length < 4) {
    errors.password = 'Пароль должен быть не менее 4 символов';
  }
  return errors;
};

export function validateProfileForm(values) {
  let errors = {};
  if (values.name && (values.name.length > 30 || values.name.length < 2)) {
    errors.name = 'Имя должно быть от 2 до 30 символов';
  } else if (values.name && !/^[a-zA-Zа-яА-Я -]+$/.test(values.name)) {
    errors.name = 'Имя может содержать только латиницу, кириллицу, пробел или дефис';
  } 
  if (values.email && !/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Некорректный адрес электронной почты';
  }
  return errors;
};