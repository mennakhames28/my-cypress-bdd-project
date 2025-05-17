const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

Given('I am on the home page', async function () {
  await browser.url('/');
});

When('I click on Test Cases', async function () {
  await $('selector-for-test-cases-link').click();
});

Then('I should be on the Test Cases page', async function () {
  const url = await browser.getUrl();
  assert(url.includes('test-cases'));
});
