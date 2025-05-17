const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

Given('I am a guest user', async function () {
  await browser.url('/');
});

Given('I add products to cart as guest', async function () {
  await $('selector-for-products-link').click();
  await $('selector-for-add-to-cart-button').click();
});

When('I proceed to checkout as guest', async function () {
  await $('selector-for-checkout-button').click();
});

When('I fill guest checkout details', async function () {
  await $('#guest-name').setValue('Guest User');
  await $('#guest-email').setValue('guest@example.com');
});

When('I enter payment details', async function () {
  await $('#card-number').setValue('4111111111111111');
  await $('#expiry').setValue('12/25');
  await $('#cvv').setValue('123');
});

When('I confirm order', async function () {
  await $('#confirm-order-button').click();
});

Then('I should see order confirmation for guest', async function () {
  const msg = await $('selector-for-order-confirmation').getText();
  assert(msg.includes('Thank you for your order'));
});
