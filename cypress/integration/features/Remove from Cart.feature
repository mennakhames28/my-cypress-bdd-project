Feature: Remove from Cart

  Scenario: Remove item
    Given I add a product to the cart
    When I remove the product
    Then cart should be empty
