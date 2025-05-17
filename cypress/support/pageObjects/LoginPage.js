class LoginPage {
  visit() {
    cy.visit('/login');
  }

  enterEmail(email) {
    cy.get('[data-qa="login-email"]').clear().type(email);
  }

  enterPassword(password) {
    cy.get('[data-qa="login-password"]').clear().type(password);
  }

  clickLogin() {
    cy.get('[data-qa="login-button"]').click();
  }
}

export default new LoginPage();
