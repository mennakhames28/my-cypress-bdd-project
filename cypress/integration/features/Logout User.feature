Feature: Logout User

  Scenario: Logout from account
    Given I am logged in
    When I click Logout
    Then I should be redirected to login page
