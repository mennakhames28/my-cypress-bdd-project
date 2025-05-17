Feature: Login User

  Scenario: Login with valid credentials
    Given I am on the home page
    When I click on Signup/Login
    And I enter valid email and password
    And I click Login
    Then I should be logged in as user
