const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

Given('I am on the Contact Us page', async function () {
  await browser.url('/contact-us');
});

When('I fill in name, email, subject, and message', async function () {
  await $('#name').setValue('Test User');
  await $('#email').setValue('testuser@example.com');
  await $('#subject').setValue('Testing');
  await $('#message').setValue('This is a test message.');
});

When('I upload a file', async function () {
  const filePath = './path/to/file.txt';
  const remotePath = await browser.uploadFile(filePath);
  await $('#upload-file').setValue(remotePath);
});

When('I click Submit', async function () {
  await $('#submit-button').click();
});

Then('I should see success message', async function () {
  const msg = await $('selector-for-success-message').getText();
  assert(msg.includes('success'));
});
