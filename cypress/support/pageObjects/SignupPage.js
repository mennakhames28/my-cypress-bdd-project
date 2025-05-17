class SignupPage {
  enterNameAndEmail(name, email) {
    cy.get('input[data-qa="signup-name"]').type(name);
    cy.get('input[data-qa="signup-email"]').type(email);
  }
  submitSignup() {
    cy.get('button[data-qa="signup-button"]').click();
  }
  verifyAccountInfoPage() {
    cy.contains('Enter Account Information').should('be.visible');
  }
}
export default SignupPage;