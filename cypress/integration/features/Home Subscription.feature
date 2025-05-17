Feature: Home Subscription

  Scenario: Verify subscription on home page
    Given I scroll to the footer
    When I enter an email and click Subscribe
    Then I should see "You have been successfully subscribed!"
