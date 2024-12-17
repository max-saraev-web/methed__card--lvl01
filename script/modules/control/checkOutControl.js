import {setChildren} from 'redom';
import creditCard from '../create/createCreditCard';
import createForm from '../create/createForm';
import createCheckoutLabel from '../create/createCheckoutLabel';
import CreditCardInputMask from 'credit-card-input-mask';
import AirDatepicker from 'air-datepicker';
import validateCard from '../utility/validateCard';

const checkOutControl = parent => {
  const p = createCheckoutLabel();
  const {card, number: cardNum, cardName, cardDate} = creditCard();
  const {
    formContainer,
    owner,
    number,
    date,
    cvv,
    sendBtn,
    btn} = createForm();

  const matrix = 'xxxx xxxx xxxx xxxx';

  const dateInput = date.querySelector('input');
  const cvvInput = cvv.querySelector('input');
  const nameInput = owner.querySelector('input');
  // ! Функионал
  const numberInput = number.querySelector('input');
  numberInput.addEventListener('focus', ({target}) => {
    if (target.value.length === 0) {
      target.value = 'xxxx xxxx xxxx xxxx';
    }
  });

  // ? Имя, начало
  nameInput.addEventListener('input', ({target}) => {
    const matrix = 'John Doe';
    target.value = target.value.replace(/[^a-z\s]/gim, '');
    cardName.textContent = target.value;
    if (target.value.length === 0) cardName.textContent = matrix;
  })
  // ? Имя, конец
  dateInput.addEventListener('click', ({target}) => {
    const picker = new AirDatepicker(target, {
      view: 'months',
      minView: 'months',
      dateFormat: 'MM yy',
    });
    picker.show();
  });

  dateInput.addEventListener('input', ({target}) => {
    target.value = target.value.replace(/[^0-9/]/i, '');
    target.value = target.value.slice(0, 5);
  })
  cvvInput.addEventListener('input', ({target}) => {
    target.value = target.value.replace(/\D/, '');
    target.value = target.value.slice(0, 3);
  });

  formContainer.addEventListener('submit', ev => {
    ev.preventDefault();
  })

  numberInput.addEventListener('input', ev => {
    const target = ev.target;

    new CreditCardInputMask({
      element: target,
      pattern: '{{9999}} {{9999}} {{9999}} {{9999}}',
    });
    console.log('333', target.value + matrix.slice(target.value.length));
    cardNum.textContent = target.value + matrix.slice(target.value.length);
  });

  sendBtn.addEventListener('click', ev => {
    const target = ev.target;
    let validCard = validateCard(formContainer);
    if (validCard === true) {
      btn.disabled = false;
    } else {
      btn.disabled = true;
    }
  });

  formContainer.addEventListener('input', () => {
    btn.disabled = true;
  });

  // ? вставка элементов
  setChildren(parent, p, card, formContainer);
  return card;
};

export default checkOutControl;
