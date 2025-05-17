class SignupPage {
  enterName(name) {
    cy.get('[data-qa="signup-name"]').clear().type(name);
  }

  enterEmail(email) {
    cy.get('[data-qa="signup-email"]').clear().type(email);
  }

  clickSignup() {
    cy.get('[data-qa="signup-button"]').click();
  }

  fillAccountInformation(data) {
    // data = { title: 'Mr', password: 'pass123', dob: {day, month, year}, firstname, lastname, address, country, state, city, zipcode, mobile }
    if (data.title === 'Mr') cy.get('#id_gender1').check();
    else if (data.title === 'Mrs') cy.get('#id_gender2').check();

    if (data.password) cy.get('#password').type(data.password);

    if (data.dob) {
      cy.get('#days').select(data.dob.day);
      cy.get('#months').select(data.dob.month);
      cy.get('#years').select(data.dob.year);
    }

    if (data.firstname) cy.get('#first_name').type(data.firstname);
    if (data.lastname) cy.get('#last_name').type(data.lastname);
    if (data.address) cy.get('#address1').type(data.address);
    if (data.country) cy.get('#country').select(data.country);
    if (data.state) cy.get('#state').type(data.state);
    if (data.city) cy.get('#city').type(data.city);
    if (data.zipcode) cy.get('#zipcode').type(data.zipcode);
    if (data.mobile) cy.get('#mobile_number').type(data.mobile);
  }

  clickCreateAccount() {
    cy.get('[data-qa="create-account"]').click();
  }
}

export default new SignupPage();
