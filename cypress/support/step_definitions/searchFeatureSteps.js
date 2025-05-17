const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

Given('I am on the home page', async function () {
  await browser.url('/');
});

When('I enter {string} into the search box', async function (searchTerm) {
  await $('#search-input').setValue(searchTerm);
  await $('#search-button').click();
});

Then('I should see results related to {string}', async function (searchTerm) {
  const resultsText = await $('selector-for-results').getText();
  if (!resultsText.toLowerCase().includes(searchTerm.toLowerCase())) {
    throw new Error(`Results do not include "${searchTerm}"`);
  }
});
