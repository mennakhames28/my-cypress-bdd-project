const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

Given('I scroll to the footer', async function () {
  await $('footer').scrollIntoView();
});

When('I enter an email and click Subscribe', async function () {
  await $('#subscription-email').setValue('subscriber@example.com');
  await $('#subscribe-button').click();
});

Then('I should see {string}', async function (msg) {
  const text = await $('selector-for-subscription-message').getText();
  assert.strictEqual(text, msg);
});
