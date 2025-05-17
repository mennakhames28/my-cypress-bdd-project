Feature: Subscription in Cart

  Scenario: Subscribe from cart page
    Given I navigate to Cart page
    When I subscribe with email
    Then I should see success subscription message
