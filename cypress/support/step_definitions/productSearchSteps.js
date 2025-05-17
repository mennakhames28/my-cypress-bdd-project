const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

Given('I am on the Products page', async function () {
  await browser.url('/products');
});

When('I search for {string}', async function (term) {
  await $('#search-input').setValue(term);
  await $('#search-button').click();
});

Then('I should see relevant results', async function () {
  const results = await $$('selector-for-search-results');
  assert(results.length > 0);
});
