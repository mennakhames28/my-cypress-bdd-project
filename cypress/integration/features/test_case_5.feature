Feature: Register with Existing Email

  Scenario: Try to register with existing email
    Given I am on the home page
    When I click on Signup/Login
    And I enter existing email and name
    And I click Signup
    Then I should see error "Email Address already exist!"
