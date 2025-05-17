const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

Given('I am logged in', async function () {
  await browser.url('/');
  await $('selector-for-signup-login-button').click();
  await $('#email').setValue('validuser@example.com');
  await $('#password').setValue('validpassword');
  await $('#login-button').click();
});

When('I click Delete Account', async function () {
  await $('selector-for-delete-account-button').click();
});

Then('I should see account deletion confirmation', async function () {
  const msg = await $('selector-for-deletion-confirmation-message').getText();
  assert(msg.includes('Account deleted'));
});
