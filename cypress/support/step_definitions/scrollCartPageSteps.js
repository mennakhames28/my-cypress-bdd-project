const { Given, When, Then } = require('@cucumber/cucumber');

Given('I am on the cart page', async function () {
  await browser.url('/cart');
});

When('I scroll down to the bottom of cart page', async function () {
  await browser.execute(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });
});

Then('I should see the subscription section', async function () {
  const subscriptionSection = await $('#subscription-section');
  if (!(await subscriptionSection.isDisplayed())) throw new Error('Subscription section not visible');
});
