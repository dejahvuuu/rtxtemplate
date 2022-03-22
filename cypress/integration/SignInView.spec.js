/// <reference types="cypress" />

import '@testing-library/cypress/add-commands';

let email, password;

context('Login flow', () => {
  it('renders Log Out text', () => {
    email = 'karn.yong@mecallapi.com';
    password = 'mecallapi';
    cy.visit('http://localhost:3000/signin');
    cy.findByPlaceholderText('Correo electrónico').type(email);
    cy.findByPlaceholderText('Contraseña').type(password);
    cy.get('form').within(() => cy.findByText('Iniciar sesión').click());
    cy.findByText('Log Out', { timeout: 10000 }).should('be.visible');
  });
});
