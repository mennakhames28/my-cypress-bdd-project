const { Given, When, Then } = require('@cucumber/cucumber');
const fs = require('fs');
const path = require('path');
const assert = require('assert');

Given('I am on the order details page', async function () {
  await browser.url('/order-details');
});

When('I click Download Invoice', async function () {
  await $('selector-for-download-invoice-button').click();
});

Then('the invoice PDF should be downloaded', async function () {
  // This depends on browser settings; you can check file existence in download folder.
  const filePath = path.resolve('path/to/downloads/invoice.pdf');
  // Wait or poll for file existence (skipped for brevity)
  const exists = fs.existsSync(filePath);
  assert(exists);
});
