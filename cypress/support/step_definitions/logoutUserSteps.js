const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

Given('I am logged in', async function () {
  await browser.url('/');
  await $('selector-for-signup-login-button').click();
  await $('#email').setValue('validuser@example.com');
  await $('#password').setValue('validpassword');
  await $('#login-button').click();
});

When('I click Logout', async function () {
  await $('selector-for-logout-button').click();
});

Then('I should be redirected to login page', async function () {
  const url = await browser.getUrl();
  assert(url.includes('login'));
});
