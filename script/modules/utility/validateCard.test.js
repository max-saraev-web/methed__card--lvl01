import validateCard from "./validateCard";

describe('Валидация формы', () => {
  const form = document.createElement('form');
  const data = {
    owner: 'Viktor Tsoi',
    number: '1111 2222 3333 4444',
    date: '23/25',
    cvv: '123',
  };

  it('Валидация cardHolder: два слова латиницей', () => {
    form.innerHTML = `
      <input type="text" name="owner" value="${'Emhyr Emreis'}" />
    `;
    expect(validateCard(form)).toBe(true);
  });

  it('Валидация cardHolder: одно слово', () => {
    form.innerHTML = `
      <input type="text" name="owner" value="${'Yennefer'}" />
    `;
    expect(validateCard(form)).toBe(false);
  });

  it('Валидация cardHolder: кириллица', () => {
    form.innerHTML = `
      <input type="text" name="owner" value="${'ХозяйкаМеднойГоры'}" />
    `;
    expect(validateCard(form)).toBe(false);
  });

  it('Валидация cardHolder: цифры', () => {
    form.innerHTML = `
      <input type="text" name="owner" value="${'777'}" />
    `;
    expect(validateCard(form)).toBe(false);
  });

  it('Валидация cardNumber: любые нецифровые символы', () => {
    form.innerHTML = `
      <input type="text" name="number" value="${'purchase an elephant'}" />
    `;
    expect(validateCard(form)).toBe(false);
  });

  it('Валидация cardNumber: символы кириллицы', () => {
    form.innerHTML = `
      <input type="text" name="number" value="${'пвапавпавдимдлывориаимзл'}" />
    `;
    expect(validateCard(form)).toBe(false);
  });

  it('Валидация cardNumber: знаки препинания', () => {
    form.innerHTML = `
      <input type="text" name="number" value="${',."":'}" />
    `;
    expect(validateCard(form)).toBe(false);
  });

  it('Валидация cardNumber: 18 цифр(перебор)', () => {
    form.innerHTML = `
      <input type="text" name="number" value="${'111122223333444455'}" />
    `;
    expect(validateCard(form)).toBe(false);
  });

  it('Валидация cardNumber: 10 цифр(не добор)', () => {
    form.innerHTML = `
      <input type="text" name="number" value="${'1111222233'}" />
    `;
    expect(validateCard(form)).toBe(false);
  });

  it('Валидация CVV/CVC: 3 цифры(валидно)', () => {
    form.innerHTML = `
      <input type="text" name="cvv" value="${'123'}" />
    `;
    expect(validateCard(form)).toBe(true);
  });

  it('Валидация CVV/CVC: 1 цифра(не валидно)', () => {
    form.innerHTML = `
      <input type="text" name="cvv" value="${'1'}" />
    `;
    expect(validateCard(form)).toBe(false);
  });

  it('Валидация CVV/CVC: 4 цифры (перебор)', () => {
    form.innerHTML = `
      <input type="text" name="cvv" value="${'1122'}" />
    `;
    expect(validateCard(form)).toBe(false);
  });
  'Валидация CVV/CVC не пропускает строки с  нецифровыми символами (латиница, кириллица и знаки препинания).'
  it('Валидация CVV/CVC: латиница', () => {
    form.innerHTML = `
      <input type="text" name="cvv" value="${'haba'}" />
    `;
    expect(validateCard(form)).toBe(false);
  });
  it('Валидация CVV/CVC: кириллица', () => {
    form.innerHTML = `
      <input type="text" name="cvv" value="${'Прокл'}" />
    `;
    expect(validateCard(form)).toBe(false);
  });
  it('Валидация CVV/CVC: знаки препинания', () => {
    form.innerHTML = `
      <input type="text" name="cvv" value="${',."":'}" />
    `;
    expect(validateCard(form)).toBe(false);
  });
});