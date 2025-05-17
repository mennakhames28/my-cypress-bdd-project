const { Given, When, Then } = require('@cucumber/cucumber');

Given('I am on the home page', async function () {
  await browser.url('/');
});

When('I scroll down to the bottom', async function () {
  await browser.execute(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });
});

Then('I should see footer section', async function () {
  const isFooterDisplayed = await $('footer').isDisplayed();
  if (!isFooterDisplayed) throw new Error('Footer not visible');
});
