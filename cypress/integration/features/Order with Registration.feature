Feature: Order with Registration

  Scenario: Place an order after signup
    Given I register as a new user
    And I add products to cart
    When I proceed to checkout
    And I enter payment details
    Then the order should be confirmed
