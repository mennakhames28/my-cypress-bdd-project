const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

Given('I navigate to Signup page', async function () {
  await browser.url('/signup');
});

When('I enter valid registration details', async function () {
  await $('#name').setValue('New User');
  await $('#email').setValue('newuser@example.com');
  await $('#password').setValue('securepassword');
});

When('I click Signup', async function () {
  await $('#signup-button').click();
});

Then('I should see welcome message', async function () {
  const welcomeMsg = await $('selector-for-welcome-message').getText();
  assert(welcomeMsg.includes('Welcome'));
});
