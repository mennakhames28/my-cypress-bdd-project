const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

Given('I register as a new user', async function () {
  await browser.url('/');
  await $('selector-for-signup-login-button').click();
  await $('#name').setValue('New User');
  await $('#email').setValue('newuser@example.com');
  await $('#signup-button').click();
});

Given('I add products to cart', async function () {
  await $('selector-for-products-link').click();
  await $('selector-for-add-to-cart-button').click();
});

When('I proceed to checkout', async function () {
  await $('selector-for-checkout-button').click();
});

When('I enter payment details', async function () {
  await $('#card-number').setValue('4111111111111111');
  await $('#expiry').setValue('12/25');
  await $('#cvv').setValue('123');
});

When('I confirm order', async function () {
  await $('#confirm-order-button').click();
});

Then('I should see order confirmation', async function () {
  const msg = await $('selector-for-order-confirmation').getText();
  assert(msg.includes('Thank you for your order'));
});
