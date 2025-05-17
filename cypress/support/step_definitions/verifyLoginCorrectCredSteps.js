const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

Given('I navigate to Login page', async function () {
  await browser.url('/login');
});

When('I enter correct email and password', async function () {
  await $('#email').setValue('correctuser@example.com');
  await $('#password').setValue('correctpassword');
});

When('I click Login', async function () {
  await $('#login-button').click();
});

Then('I should be redirected to user dashboard', async function () {
  const url = await browser.getUrl();
  assert(url.includes('/dashboard'));
});
