class HomePage {
  clickSignupLogin() {
    cy.get('a[href="/login"]').click();
  }
}
export default HomePage;