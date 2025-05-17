Feature: Search and Add to Cart

  Scenario: Search and add product
    Given I search for a product
    When I add it to cart
    Then it should be in the cart
