class HomePage {
  visit() {
    cy.visit('/');
  }

  clickSignupLogin() {
    cy.contains('Signup / Login').click();
  }

  clickContactUs() {
    cy.contains('Contact us').click();
  }

  clickProducts() {
    cy.contains('Products').click();
  }

  clickTestCases() {
    cy.contains('Test Cases').click();
  }

  scrollToFooter() {
    cy.scrollTo('bottom');
  }

  clickCart() {
    cy.contains('Cart').click();
  }

  openBrandsList() {
    cy.get('.brands_products').scrollIntoView();
  }

  openCategoriesMenu() {
    cy.get('.left-sidebar .panel-group').scrollIntoView();
  }
}

export default new HomePage();
