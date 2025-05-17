class CheckoutPage {
  clickProceedToCheckout() {
    cy.contains('Proceed To Checkout').click();
  }

  enterPaymentDetails(cardData) {
    // cardData = { nameOnCard, cardNumber, cvc, expiryMonth, expiryYear }
    if (cardData.nameOnCard) cy.get('[data-qa="name-on-card"]').type(cardData.nameOnCard);
    if (cardData.cardNumber) cy.get('[data-qa="card-number"]').type(cardData.cardNumber);
    if (cardData.cvc) cy.get('[data-qa="cvc"]').type(cardData.cvc);
    if (cardData.expiryMonth) cy.get('[data-qa="expiry-month"]').type(cardData.expiryMonth);
    if (cardData.expiryYear) cy.get('[data-qa="expiry-year"]').type(cardData.expiryYear);
  }

  clickPayAndConfirmOrder() {
    cy.get('[data-qa="pay-button"]').click();
  }
}

export default new CheckoutPage();
