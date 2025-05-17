Feature: Product Quantity in Cart

  Scenario: Verify quantity
    Given I add multiple quantities of a product
    When I view the cart
    Then the quantity should match what I selected
