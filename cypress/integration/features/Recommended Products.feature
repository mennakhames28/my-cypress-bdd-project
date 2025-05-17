Feature: Recommended Products

  Scenario: Add recommended item
    Given I scroll to recommended items
    When I add one to cart
    Then it should appear in cart
