class AccountPage {
  clickDeleteAccount() {
    cy.contains('Delete Account').click();
  }

  checkAccountDeleted() {
    cy.contains('Account Deleted!').should('be.visible');
  }
}

export default new AccountPage();
