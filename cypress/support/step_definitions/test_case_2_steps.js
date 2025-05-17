import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I am on the home page', () => {
  cy.visit('/');
});

When('I perform actions for test case 2', () => {
  // TODO: Implement actions for test case 2
});

Then('I should see expected results for test case 2', () => {
  // TODO: Validate results for test case 2
});