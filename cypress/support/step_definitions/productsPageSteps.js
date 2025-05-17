const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

Given('I am on the home page', async function () {
  await browser.url('/');
});

When('I click on Products', async function () {
  await $('selector-for-products-link').click();
});

Then('I should see the product list', async function () {
  const products = await $$('selector-for-products');
  assert(products.length > 0);
});
