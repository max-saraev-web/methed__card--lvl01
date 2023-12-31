import checkOutControl from './modules/control/checkOutControl';

const cardBody = document.querySelector('.card');

document.addEventListener('DOMContentLoaded', () => {
  const init = () => {
    checkOutControl(cardBody);
  };

  init();
});
