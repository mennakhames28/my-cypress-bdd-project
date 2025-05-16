class LoginPage {
  visit() {
    cy.visit('/login');
  }

  enterUsername(username) {
    cy.get('input[data-qa="login-email"]').type(username);
  }

  enterPassword(password) {
    cy.get('input[data-qa="login-password"]').type(password);
  }

  submit() {
    cy.get('button[data-qa="login-button"]').click();
  }

  getSuccessMessage() {
    return cy.get('a').contains('Logged in as');
  }
}

export default LoginPage;
