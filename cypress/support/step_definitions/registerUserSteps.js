const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

Given('I am on the home page', async function () {
  await browser.url('/');
});

When('I click on Signup/Login', async function () {
  await $('selector-for-signup-login-button').click();
});

When('I enter name and email', async function () {
  await $('#name').setValue('Test User');
  await $('#email').setValue('testuser@example.com');
});

When('I click Signup', async function () {
  await $('#signup-button').click();
});

Then('I should see {string}', async function (expectedText) {
  const text = await $('selector-for-target-element').getText();
  assert.strictEqual(text, expectedText);
});
