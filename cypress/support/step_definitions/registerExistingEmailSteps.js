const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

Given('I am on the Signup/Login page', async function () {
  await browser.url('/signup-login');
});

When('I enter an already registered email', async function () {
  await $('#email').setValue('existinguser@example.com');
  await $('#signup-button').click();
});

Then('I should see error {string}', async function (expectedError) {
  const errorText = await $('selector-for-error-message').getText();
  assert.strictEqual(errorText, expectedError);
});
