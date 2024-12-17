/// <reference types="cypress" />

describe('Тестируем заполнение карточки', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234/');
  });
  
  it('Ввести валидные данные', () => {
    cy.get('[name="owner"]').type('Azar Javed');
    cy.get('[name="number"]').type('1111222233334444');
    cy.get('[name="date"]').type('11/26');
    cy.get('[name="cvv"]').type('666');
    cy.get('[type="button"]').click();
    cy.get('[type="submit"]').should('not.have.attr', 'disabled');
  });

  it('Ввести не валидные данные', () => {
    cy.get('[name="owner"]').type('Ip m');
    cy.get('[name="number"]').type('1111222233334444');
    cy.get('[name="date"]').type('11/26');
    cy.get('[name="cvv"]').type('666');
    cy.get('[type="button"]').click();
    cy.get('[type="submit"]').should('have.attr', 'disabled');
  });
})