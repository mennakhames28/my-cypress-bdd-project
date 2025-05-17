Feature: Register User

  Scenario: Register a new user
    Given I am on the home page
    When I click on Signup/Login
    And I enter name and email
    And I click Signup
    Then I should see "Enter Account Information"
