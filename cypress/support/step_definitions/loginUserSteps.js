import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../pageObjects/LoginPage';

const loginPage = new LoginPage();

Given('I open the login page', () => {
  loginPage.visit();
});

When('I enter valid credentials', () => {
  loginPage.enterUsername('mennakhames554@gmail.com');
  loginPage.enterPassword('123456');
  loginPage.submit();
});

Then('I should be logged in successfully', () => {
  loginPage.getSuccessMessage().should('contain', 'Logged in as');
});
