const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

Given('I am on the home page', async function () {
  await browser.url('/');
});

When('I click on Signup/Login', async function () {
  await $('selector-for-signup-login-button').click();
});

When('I enter invalid email and password', async function () {
  await $('#email').setValue('wrong@example.com');
  await $('#password').setValue('wrongpassword');
});

When('I click Login', async function () {
  await $('#login-button').click();
});

Then('I should see error message {string}', async function (expectedError) {
  const errorText = await $('selector-for-error-message').getText();
  assert.strictEqual(errorText, expectedError);
});
