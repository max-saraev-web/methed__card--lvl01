import {el} from 'redom';

const createCheckoutLabel = () => {
  const p = el('p.secure', 'Secure Checkout');
  return p;
};

export default createCheckoutLabel;
