import {el, setChildren} from 'redom';

const createInputGroup = (wrapClass, name, text) => {
  const wrap = el('div', {
    className: `form__input-wrap form__input-wrap_${wrapClass}`,
  });

  const label = el('label', {
    className: `form__label form__${name}-label`,
    for: `${name}`,
    textContent: `${text}`,
  });

  const input = el('input', {
    type: 'text',
    className: `input input__${name}`,
    name: `${name}`,
  });

  setChildren(wrap, label, input);
  return wrap;
};

const createBtn = text => {
  const btn = el('button.form__button', `${text}`, {
    type: 'submit',
    disabled: true,
  });
  return btn;
};
const createForm = () => {
  const formContainer = el('form', {
    action: '#',
    className: 'form',
    id: 'form',
  });

  const owner = createInputGroup('holder', 'owner', 'Card Holder');
  const number = createInputGroup('number', 'number', 'Card Number');
  const date = createInputGroup('date', 'date', 'Card Expiry');
  const cvv = createInputGroup('cvv', 'cvv', 'CVV');
  const btn = createBtn('CHECK OUT');

  setChildren(formContainer, owner, number, date, cvv, btn);

  return {
    formContainer,
    owner,
    number,
    date,
    cvv,
    btn,
  };
};

export default createForm;
