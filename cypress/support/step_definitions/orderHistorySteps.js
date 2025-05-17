const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

Given('I am logged in', async function () {
  await browser.url('/');
  await $('selector-for-signup-login-button').click();
  await $('#email').setValue('validuser@example.com');
  await $('#password').setValue('validpassword');
  await $('#login-button').click();
});

When('I navigate to Orders page', async function () {
  await $('selector-for-orders-link').click();
});

Then('I should see past orders', async function () {
  const orders = await $$('selector-for-order-list');
  assert(orders.length > 0);
});
