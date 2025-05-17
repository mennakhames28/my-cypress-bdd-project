import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import ContactUsPage from '../pages/ContactUsPage';
import ProductsPage from '../pages/ProductsPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';
import OrderHistoryPage from '../pages/OrderHistoryPage';
import AccountPage from '../pages/AccountPage';

// 1. Home page navigation
Given('I am on the home page', () => {
  HomePage.visit();
});

When('I click on Signup/Login', () => {
  HomePage.clickSignupLogin();
});

When('I click on Contact Us', () => {
  HomePage.clickContactUs();
});

When('I click on Products', () => {
  HomePage.clickProducts();
});

When('I click on Test Cases', () => {
  HomePage.clickTestCases();
});

When('I scroll to the footer', () => {
  HomePage.scrollToFooter();
});

When('I navigate to Cart page', () => {
  HomePage.clickCart();
});

When('I open brand list', () => {
  HomePage.openBrandsList();
});

When('I open the Categories menu', () => {
  HomePage.openCategoriesMenu();
});

// 2. Signup / Registration
When('I enter name {string} and email {string}', (name, email) => {
  SignupPage.enterName(name);
  SignupPage.enterEmail(email);
});

When('I click Signup', () => {
  SignupPage.clickSignup();
});

When('I fill account information with:', (dataTable) => {
  const data = dataTable.rowsHash();
  // Parse DOB string "day-month-year" if provided
  const dobParts = data.dob ? data.dob.split('-') : null;

  SignupPage.fillAccountInformation({
    title: data.title,
    password: data.password,
    dob: dobParts ? { day: dobParts[0], month: dobParts[1], year: dobParts[2] } : null,
    firstname: data.firstname,
    lastname: data.lastname,
    address: data.address,
    country: data.country,
    state: data.state,
    city: data.city,
    zipcode: data.zipcode,
    mobile: data.mobile,
  });
});

When('I click Create Account', () => {
  SignupPage.clickCreateAccount();
});

Then('I should see {string} message', (message) => {
  cy.contains(message).should('be.visible');
});

Then('I should be logged in as user', () => {
  cy.contains('Logged in as').should('exist');
});

// 3. Login
When('I enter valid email {string} and password {string}', (email, password) => {
  LoginPage.enterEmail(email);
  LoginPage.enterPassword(password);
});

When('I enter invalid email {string} and password {string}', (email, password) => {
  LoginPage.enterEmail(email);
  LoginPage.enterPassword(password);
});

When('I click Login', () => {
  LoginPage.clickLogin();
});

When('I click Logout', () => {
  cy.contains('Logout').click();
});

Then('I should be redirected to login page', () => {
  cy.url().should('include', '/login');
});

Then('I should see error message {string}', (msg) => {
  cy.contains(msg).should('be.visible');
});

// 4. Contact Us form
Given('I am on the Contact Us page', () => {
  ContactUsPage.visit();
});

When('I fill in name {string}, email {string}, subject {string}, and message {string}', (name, email, subject, message) => {
  ContactUsPage.fillName(name);
  ContactUsPage.fillEmail(email);
  ContactUsPage.fillSubject(subject);
  ContactUsPage.fillMessage(message);
});

When('I upload a file {string}', (filePath) => {
  ContactUsPage.uploadFile(filePath);
});

When('I click Submit', () => {
  ContactUsPage.clickSubmit();
});

Then('I should see success message', () => {
  cy.contains('Success! Your details have been submitted successfully.').should('be.visible');
});

// 5. Products and search
When('I search for {string}', (productName) => {
  ProductsPage.searchProduct(productName);
});

Then('I should see relevant results', () => {
  cy.get('.productinfo').should('contain.text', 'Dress'); // example
});

When('I add first product to cart', () => {
  ProductsPage.clickAddToCartFirstProduct();
});

When('I click Continue Shopping', () => {
  ProductsPage.clickContinueShopping();
});

When('I select category {string} with subcategory {string}', (category, subCategory) => {
  ProductsPage.openCategory(category, subCategory);
});

When('I click brand {string}', (brandName) => {
  ProductsPage.clickBrand(brandName);
});

Then('I should see products under {string}', (titleText) => {
  cy.get('.title.text-center').should('contain.text', titleText);
});

// 6. Cart related steps
When('I view the cart', () => {
  CartPage.visit();
});

Then('I should see the product in cart', () => {
  CartPage.getCartDescriptions().should('exist');
});

When('I add multiple quantities of product at index {int} with quantity {int}', (index, quantity) => {
  CartPage.changeQuantity(index, quantity);
  CartPage.clickUpdate();
});

Then('the quantity for product at index {int} should be {int}', (index, quantity) => {
  cy.get('.cart_quantity_input').eq(index).should('have.value', quantity.toString());
});

When('I remove the product at index {int}', (index) => {
  CartPage.removeProduct(index);
});

Then('cart should be empty', () => {
  CartPage.checkCartEmpty();
});

// 7. Checkout & Payment
When('I proceed to checkout', () => {
  CheckoutPage.clickProceedToCheckout();
});

When('I enter payment details:', (dataTable) => {
  const data = dataTable.rowsHash();
  CheckoutPage.enterPaymentDetails({
    nameOnCard: data.nameOnCard,
    cardNumber: data.cardNumber,
    cvc: data.cvc,
    expiryMonth: data.expiryMonth,
    expiryYear: data.expiryYear,
  });
});

When('I click Pay and Confirm Order', () => {
  CheckoutPage.clickPayAndConfirmOrder();
});

Then('the order should be confirmed', () => {
  cy.contains('Your order has been placed successfully!').should('be.visible');
});

// 8. Review submission
When('I fill review form and submit with name {string}, email {string}, and review {string}', (name, email, review) => {
  cy.get('#name').type(name);
  cy.get('#email').type(email);
  cy.get('#review').type(review);
  cy.get('#button-review').click();
});

Then('I should see review confirmation', () => {
  cy.contains('Thank you for your review.').should('be.visible');
});

// 9. Subscription
When('I enter email {string} and click Subscribe', (email) => {
  cy.get('#susbscribe_email').type(email);
  cy.get('#subscribe').click();
});

Then('I should see subscription confirmation', () => {
  cy.contains('You have been successfully subscribed!').should('be.visible');
});

// 10. Recommended items
When('I add one recommended item to cart', () => {
  cy.get('#recommended-item-carousel .add-to-cart').first().click();
});

Then('it should appear in cart', () => {
  HomePage.clickCart();
  cy.get('.cart_description').should('exist');
});

// 11. Cart retains items after login/logout
Given('I add item to cart', () => {
  ProductsPage.clickAddToCartFirstProduct();
  ProductsPage.clickContinueShopping();
});

When('I logout and login again with email {string} and password {string}', (email, password) => {
  cy.contains('Logout').click();
  HomePage.clickSignupLogin();
  LoginPage.enterEmail(email);
  LoginPage.enterPassword(password);
  LoginPage.clickLogin();
});

Then('my cart should retain the item', () => {
  HomePage.clickCart();
  cy.get('.cart_description').should('exist');
});

// 12. Order history & invoice
When('I go to order history and view order', () => {
  OrderHistoryPage.clickViewOrder();
});

Then('I can download invoice', () => {
  OrderHistoryPage.clickDownloadInvoice();
  // Optionally add checks for downloaded file if needed
});

// 13. Delete account
When('I delete my account', () => {
  AccountPage.clickDeleteAccount();
});

Then('I should see account deletion confirmation', () => {
  AccountPage.checkAccountDeleted();
});

// 14. Contact Us page verification
Then('I should land on contact form page', () => {
  cy.url().should('include', '/contact_us');
});
