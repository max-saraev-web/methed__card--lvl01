import {setChildren} from 'redom';
import creditCard from '../create/createCreditCard';
import createForm from '../create/createForm';
import createCheckoutLabel from '../create/createCheckoutLabel';

const checkOutControl = parent => {
  const p = createCheckoutLabel();
  const {card, number: cardNum, cardName, cardDate} = creditCard();
  const {
    formContainer,
    owner,
    number,
    date,
    cvv,
    btn,} = createForm();
  // ! Функионал
  formContainer.addEventListener('input', ({target}) => {
    const numberInput = number.querySelector('input');
    const nameInput = owner.querySelector('input');
    const dateInput = date.querySelector('input');

    if (target === numberInput) {
      cardNum.textContent = target.value;
    }
    if (target === nameInput) {
      cardName.textContent = target.value;
    }
    if (target === dateInput) {
      cardDate.textContent = target.value;
    }
  });
  // ? вставка элементов
  setChildren(parent, p, card, formContainer);
  return card;
};

export default checkOutControl;
