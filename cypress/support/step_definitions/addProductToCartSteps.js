const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

Given('I am on the Products page', async function () {
  await browser.url('/products');
});

When('I add a product to the cart', async function () {
  await $('selector-for-add-to-cart-button').click();
});

Then('I should see the product in cart', async function () {
  await $('selector-for-cart').click();
  const items = await $$('selector-for-cart-items');
  assert(items.length > 0);
});
