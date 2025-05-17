const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

Given('I navigate to Login page', async function () {
  await browser.url('/login');
});

When('I enter incorrect email and password', async function () {
  await $('#email').setValue('incorrect@example.com');
  await $('#password').setValue('wrongpassword');
});

When('I click Login', async function () {
  await $('#login-button').click();
});

Then('I should see login error message {string}', async function (expectedMessage) {
  const errorMsg = await $('selector-for-error-message').getText();
  assert.strictEqual(errorMsg, expectedMessage);
});
