Feature: Delete Account

  Scenario: Remove my account
    Given I am logged in
    When I delete my account
    Then I should see confirmation
