// commands.js

// Navigate to home page
Cypress.Commands.add('goHome', () => {
  cy.visit('/');
});

// Click Signup/Login
Cypress.Commands.add('clickSignupLogin', () => {
  cy.get('a[href="/signup"]').click();
});

// Enter name and email for signup
Cypress.Commands.add('enterSignupInfo', (name, email) => {
  cy.get('input[name="name"]').type(name);
  cy.get('input[name="email"]').type(email);
});

// Click Signup button
Cypress.Commands.add('clickSignup', () => {
  cy.get('button[type="submit"]').contains('Signup').click();
});

// Enter valid login credentials
Cypress.Commands.add('enterLogin', (email, password) => {
  cy.get('input[name="email"]').type(email);
  cy.get('input[name="password"]').type(password);
});

// Click Login button
Cypress.Commands.add('clickLogin', () => {
  cy.get('button[type="submit"]').contains('Login').click();
});

// Verify user is logged in by username or UI element
Cypress.Commands.add('verifyLoggedIn', (username) => {
  cy.contains(username).should('be.visible');
});

// Logout user
Cypress.Commands.add('logout', () => {
  cy.get('a').contains('Logout').click();
});

// Enter already registered email in signup
Cypress.Commands.add('enterExistingEmail', (email) => {
  cy.get('input[name="email"]').clear().type(email);
});

// Navigate to Contact Us page
Cypress.Commands.add('goToContactUs', () => {
  cy.get('a[href="/contact_us"]').click();
});

// Fill Contact Us form
Cypress.Commands.add('fillContactForm', (name, email, subject, message) => {
  cy.get('input[name="name"]').type(name);
  cy.get('input[name="email"]').type(email);
  cy.get('input[name="subject"]').type(subject);
  cy.get('textarea[name="message"]').type(message);
});

// Upload file in Contact Us form
Cypress.Commands.add('uploadFile', (fileName) => {
  cy.get('input[type="file"]').attachFile(fileName);
});

// Submit Contact Us form
Cypress.Commands.add('submitContactForm', () => {
  cy.get('button[type="submit"]').contains('Submit').click();
});

// Click Test Cases link
Cypress.Commands.add('clickTestCases', () => {
  cy.get('a[href="/test_cases"]').click();
});

// Click Products link
Cypress.Commands.add('clickProducts', () => {
  cy.get('a[href="/products"]').click();
});

// Search product
Cypress.Commands.add('searchProduct', (productName) => {
  cy.get('input[name="search"]').type(productName);
  cy.get('button[type="submit"]').contains('Search').click();
});

// Scroll to footer and subscribe with email
Cypress.Commands.add('subscribeFooter', (email) => {
  cy.get('footer').scrollIntoView();
  cy.get('input[name="subscription_email"]').type(email);
  cy.get('button').contains('Subscribe').click();
});

// Subscribe on Cart page
Cypress.Commands.add('subscribeCart', (email) => {
  cy.visit('/cart');
  cy.get('input[name="subscription_email"]').type(email);
  cy.get('button').contains('Subscribe').click();
});

// Add product to cart by index or name
Cypress.Commands.add('addProductToCart', (productName) => {
  if (productName) {
    cy.contains('.product', productName).find('button').contains('Add to cart').click();
  } else {
    // add first product if no name given
    cy.get('.product').first().find('button').contains('Add to cart').click();
  }
});

// View cart
Cypress.Commands.add('viewCart', () => {
  cy.get('a[href="/cart"]').click();
});

// Remove product from cart
Cypress.Commands.add('removeProductFromCart', (productName) => {
  if (productName) {
    cy.contains('.cart_item', productName).find('.remove').click();
  } else {
    cy.get('.cart_item').first().find('.remove').click();
  }
});

// Select category navigation
Cypress.Commands.add('selectCategory', (categoryPath) => {
  // categoryPath like "Women > Dress"
  const categories = categoryPath.split(' > ');
  categories.forEach(cat => {
    cy.get('.categories_menu').contains(cat).click();
  });
});

// Select brand filter
Cypress.Commands.add('filterByBrand', (brandName) => {
  cy.get('.brands_list').contains(brandName).click();
});

// Fill review form on product page
Cypress.Commands.add('fillReviewForm', (name, email, review, rating) => {
  cy.get('input[name="name"]').type(name);
  cy.get('input[name="email"]').type(email);
  cy.get('textarea[name="review"]').type(review);
  if (rating) {
    cy.get(`input[name="rating"][value="${rating}"]`).check();
  }
  cy.get('button').contains('Submit').click();
});

// Download invoice from order history
Cypress.Commands.add('downloadInvoice', () => {
  cy.get('a').contains('Download Invoice').click();
});

// Delete user account
Cypress.Commands.add('deleteAccount', () => {
  cy.get('a').contains('Delete Account').click();
});

// Navigate to Contact Us page (alternative)
Cypress.Commands.add('navigateToContactUs', () => {
  cy.get('a').contains('Contact Us').click();
});

// Helper to login user
Cypress.Commands.add('loginUser', (email, password) => {
  cy.goHome();
  cy.clickSignupLogin();
  cy.enterLogin(email, password);
  cy.clickLogin();
});

// Add multiple quantity of product to cart
Cypress.Commands.add('addProductQuantityToCart', (productName, quantity) => {
  cy.contains('.product', productName).within(() => {
    cy.get('input[type="number"]').clear().type(quantity);
    cy.get('button').contains('Add to cart').click();
  });
});

// Proceed to checkout
Cypress.Commands.add('proceedToCheckout', () => {
  cy.get('a').contains('Cart').click();
  cy.get('button').contains('Proceed to Checkout').click();
});

// Enter payment details (mock example)
Cypress.Commands.add('enterPaymentDetails', (cardNumber, expiry, cvv) => {
  cy.get('input[name="card_number"]').type(cardNumber);
  cy.get('input[name="expiry"]').type(expiry);
  cy.get('input[name="cvv"]').type(cvv);
  cy.get('button').contains('Pay').click();
});

// Register new user (full flow)
Cypress.Commands.add('registerNewUser', (name, email) => {
  cy.goHome();
  cy.clickSignupLogin();
  cy.enterSignupInfo(name, email);
  cy.clickSignup();
  cy.contains('Enter Account Information').should('be.visible');
});

// Register during checkout
Cypress.Commands.add('registerDuringCheckout', (name, email) => {
  // Assuming checkout page has registration option
  cy.get('button').contains('Register').click();
  cy.enterSignupInfo(name, email);
  cy.clickSignup();
});

// Verify cart contents count
Cypress.Commands.add('verifyCartQuantity', (expectedQuantity) => {
  cy.get('.cart_quantity').should('have.text', expectedQuantity.toString());
});

// Verify error message shown
Cypress.Commands.add('verifyErrorMessage', (msg) => {
  cy.contains(msg).should('be.visible');
});

// Verify success message shown
Cypress.Commands.add('verifySuccessMessage', (msg) => {
  cy.contains(msg).should('be.visible');
});
