const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

Given('I add multiple quantities of a product', async function () {
  await $('#quantity-input').setValue('3');
  await $('selector-for-add-to-cart-button').click();
});

When('I view the cart', async function () {
  await $('selector-for-cart').click();
});

Then('the quantity should match what I selected', async function () {
  const qty = await $('#cart-product-quantity').getValue();
  assert.strictEqual(qty, '3');
});
