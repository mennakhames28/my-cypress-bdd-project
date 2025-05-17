class OrderHistoryPage {
  clickViewOrder() {
    cy.contains('View Order').first().click();
  }

  clickDownloadInvoice() {
    cy.contains('Download Invoice').click();
  }
}

export default new OrderHistoryPage();
