class ContactUsPage {
  visit() {
    cy.visit('/contact_us');
  }

  fillName(name) {
    cy.get('[data-qa="name"]').clear().type(name);
  }

  fillEmail(email) {
    cy.get('[data-qa="email"]').clear().type(email);
  }

  fillSubject(subject) {
    cy.get('[data-qa="subject"]').clear().type(subject);
  }

  fillMessage(message) {
    cy.get('[data-qa="message"]').clear().type(message);
  }

  uploadFile(filePath) {
    cy.get('input[type="file"]').selectFile(filePath, { force: true });
  }

  clickSubmit() {
    cy.get('[data-qa="submit-button"]').click();
  }
}

export default new ContactUsPage();
