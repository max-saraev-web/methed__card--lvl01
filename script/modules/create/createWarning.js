import { el } from "redom";

const createWarning = text => {
  const warning = el('h2',{
    className: 'form__warning',
    textContent: `Введите валидные данные в поле ${text}!`,
  })
  return warning;
};

export default createWarning;