import { mount } from "redom";
import createWarning from "../create/createWarning";
import updateFieldState from "./updateFieldState";

const validateCard = form => {
  const data = Object.fromEntries(new FormData(form));
  console.log('data: ', data);
  console.log('data-тип', typeof data);
  let fieldsValidity = {};
  for (const field in data) {
      if (field === 'owner') {
        console.log('Поле', data[field]);
        const regExp = /([a-z]{2,})\s+([a-z]{2,})/i.test(data[field]);
        if (regExp === false) {
          const formElem = form.querySelector(`[name=${field}]`);
          const warning = createWarning(field);
          mount(formElem.parentElement, warning);
          setTimeout(() => {
            warning.remove();
          }, 2000);
          updateFieldState(field, fieldsValidity, false);
        } else if (regExp === true) {
          updateFieldState(field, fieldsValidity, true);
        }
      }
      if (field === 'number') {
        console.log('Поле', data[field]);
        const regExp = /(\d{4}\s{1}){3}(\d{4}){1}/.test(data[field]);
        console.log('regExp-card: ', regExp);
        if (regExp === false) {
          const formElem = form.querySelector(`[name=${field}]`);
          const warning = createWarning(field);
          mount(formElem.parentElement, warning);
          setTimeout(() => {
            warning.remove();
          }, 2000);
          updateFieldState(field, fieldsValidity, false);
        } else if (regExp === true) {
          updateFieldState(field, fieldsValidity, true);
        }
      }
      if (field === 'date') {
        const regExp = /(\d{2})\/(\d{2})/.test(data[field]);
          if (regExp === false) {
          const formElem = form.querySelector(`[name=${field}]`);
          const warning = createWarning(field);
          mount(formElem.parentElement, warning);
          setTimeout(() => {
            warning.remove();
          }, 2000);
          updateFieldState(field, fieldsValidity, false);
        } else if (regExp === true) {
          updateFieldState(field, fieldsValidity, true);
        }
      }
      if (field === 'cvv') {
        const regExp = /\d{3}/.test(data[field]);

        if (regExp === false) {
          const formElem = form.querySelector(`[name=${field}]`);
          const warning = createWarning(field);
          mount(formElem.parentElement, warning);
          setTimeout(() => {
            warning.remove();
          }, 2000);
          updateFieldState(field, fieldsValidity, false);
        } else if (regExp === true) {
          updateFieldState(field, fieldsValidity, true);
        }
      }
    if (data[field].length > 0) {
      console.log('Имя поля', field);
      console.log('Значение поля', data[field]);
      console.log(form);
      // const formElem = form.querySelector(`[name=${field}]`);
      // console.log('formElem: ', formElem.parentElement.style.border = '1px solid red');
      // const warning = createWarning(field);
      // mount(formElem.parentElement, warning)
      // setTimeout(() => {
      //   warning.remove();
      // }, 2000);
    }
      console.log('Все поля после проверки', fieldsValidity);
      console.log('Длина прихода', Object.keys(data).length);
    // console.log('Поле', field);
    // console.log('Имя поля', data[field]);
  }
    if ((Object.keys(data).length === Object.keys(fieldsValidity).length) && Object.values(fieldsValidity).every(elem => elem === true)) {
      console.log('Все поля валидны');
    } else {
      console.log('не все поля валидны');
    }
};

export default validateCard;