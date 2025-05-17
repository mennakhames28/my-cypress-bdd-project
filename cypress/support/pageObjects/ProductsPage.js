class ProductsPage {
  searchProduct(productName) {
    cy.get('#search_product').clear().type(productName);
    cy.get('#submit_search').click();
  }

  clickAddToCartFirstProduct() {
    cy.get('.add-to-cart').first().click();
  }

  clickContinueShopping() {
    cy.contains('Continue Shopping').click();
  }

  openCategory(category, subCategory) {
    cy.contains(category).click();
    if (subCategory) cy.contains(subCategory).click();
  }

  clickBrand(brandName) {
    cy.contains(brandName).click();
  }
}

export default new ProductsPage();
