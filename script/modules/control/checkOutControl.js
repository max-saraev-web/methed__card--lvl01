import {setChildren} from 'redom';
import creditCard from '../create/createCreditCard';
import createForm from '../create/createForm';
import createCheckoutLabel from '../create/createCheckoutLabel';
import CreditCardInputMask from 'credit-card-input-mask';
import AirDatepicker from 'air-datepicker';

const checkOutControl = parent => {
  const p = createCheckoutLabel();
  const {card, number: cardNum, cardName, cardDate} = creditCard();
  const {
    formContainer,
    owner,
    number,
    date,
    cvv,
    btn} = createForm();

  const matrix = 'xxxx xxxx xxxx xxxx';

  const dateInput = date.querySelector('input');
  const cvvInput = cvv.querySelector('input');
  // ! Функионал
  const numberInput = number.querySelector('input');
  numberInput.addEventListener('focus', ({target}) => {
    if (target.value.length === 0) {
      target.value = 'xxxx xxxx xxxx xxxx';
    }
  });

  dateInput.addEventListener('click', ({target}) => {
    new AirDatepicker(target, {
      view: 'months',
      minView: 'months',
      dateFormat: 'MM yy',
    });
  });
  const isDate = new Promise(resolve => {
    dateInput.addEventListener('blur', ({target}) => {
      target.value = target.value.replace(/\s/g, '/');
      cardDate.textContent = target.value;
      if (/(\d{2})\/(\d{2})/.test(target.value)) {
        console.log('date - resolved');
        resolve();
      };
    });
  });

  const isName = new Promise(resolve => {
    let isTyping;
    let isPending = true;
    clearTimeout(isTyping);
    const nameInput = owner.querySelector('input');

    nameInput.addEventListener('input', ({target}) => {
      const matrix = 'John Doe';
      target.value = target.value.replace(/[^a-z\s]/gim, '');
      cardName.textContent = target.value;
      if (target.value.length === 0) cardName.textContent = matrix;

      isTyping = setTimeout(() => {
        if (/\w\s{1}\w/i.test(target.value) &&
        isPending) {
          isPending = false;
          clearTimeout(isTyping);
          resolve();
        }
      }, 7000);
    });
  });

  const isNum = new Promise(resolve => {
    numberInput.addEventListener('input', ({target}) => {
      new CreditCardInputMask({
        element: target,
        pattern: '{{9999}} {{9999}} {{9999}} {{9999}}',
      });
      target.value = target.value + matrix.slice(target.value.length);
      cardNum.textContent = target.value + matrix.slice(target.value.length);
      if (/(\d{4}\s{1}){3}(\d{4}){1}/gim.test(target.value)) resolve();
    });
  });

  const isCvv = new Promise(resolve => {
    cvvInput.addEventListener('input', ({target}) => {
      target.value = target.value.replace(/\D/, '');
      target.value = target.value.slice(0, 3);
      if (/\d{3}/.test(target.value)) resolve();
    });
  });

  Promise.all([isDate, isName, isNum, isCvv])
    .then(() => {
      btn.disabled = false;
    });

  // ? вставка элементов
  setChildren(parent, p, card, formContainer);
  return card;
};

export default checkOutControl;
