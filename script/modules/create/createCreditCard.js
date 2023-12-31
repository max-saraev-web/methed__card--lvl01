import {el, setChildren} from 'redom';

const creditCard = () => {
  const card = el('.credit-card', 'lorem');
  const number = el('span.card__number', 'xxxx xxxx xxxx xxxx');

  const cardElemsWrap = el('.card__personal');
  const cardName = el('span.card__name', 'John Doe');
  const cardDate = el('span.card__date', '04/24');

  setChildren(cardElemsWrap, [cardName, cardDate]);
  setChildren(card, [number, cardElemsWrap]);
  return {
    card,
    number,
    cardName,
    cardDate,
  };
};

export default creditCard;
