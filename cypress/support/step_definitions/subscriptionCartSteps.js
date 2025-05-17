const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

Given('I navigate to Cart page', async function () {
  await $('selector-for-cart-link').click();
});

When('I subscribe with email', async function () {
  await $('#cart-subscription-email').setValue('subscriber@example.com');
  await $('#cart-subscribe-button').click();
});

Then('I should see success subscription message', async function () {
  const msg = await $('selector-for-subscription-message').getText();
  assert(msg.includes('successfully subscribed'));
});
