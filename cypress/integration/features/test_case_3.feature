Feature: Invalid Login

  Scenario: Login with wrong credentials
    Given I am on the home page
    When I click on Signup/Login
    And I enter invalid email and password
    And I click Login
    Then I should see error message "Your email or password is incorrect!"
