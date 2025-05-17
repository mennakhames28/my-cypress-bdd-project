const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

Given('I am on the Products page', async function () {
  await browser.url('/products');
});

When('I view the product prices', async function () {
  this.prices = await $$('selector-for-product-price').map(async (el) => await el.getText());
});

Then('each product price should be correct', async function () {
  for (const price of this.prices) {
    // Implement price validation logic here
    if (!price.match(/^\$\d+(\.\d{2})?$/)) {
      throw new Error(`Invalid price format: ${price}`);
    }
  }
});
