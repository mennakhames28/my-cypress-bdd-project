class CartPage {
  visit() {
    cy.contains('Cart').click();
  }

  getCartDescriptions() {
    return cy.get('.cart_description');
  }

  changeQuantity(index, quantity) {
    cy.get('.cart_quantity_input').eq(index).clear().type(quantity);
  }

  clickUpdate() {
    cy.contains('Update').click();
  }

  removeProduct(index = 0) {
    cy.get('.cart_delete .fa-trash').eq(index).click();
  }

  checkCartEmpty() {
    cy.contains('Cart is empty').should('exist');
  }
}

export default new CartPage();
