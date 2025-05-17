const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

Given('I have added products to cart', async function () {
  await browser.url('/products');
  await $('selector-for-add-to-cart-button').click();
});

When('I navigate to cart page', async function () {
  await $('selector-for-cart-link').click();
});

Then('I should see all added products in cart', async function () {
  const cartItems = await $$('selector-for-cart-items');
  assert(cartItems.length > 0);
});
