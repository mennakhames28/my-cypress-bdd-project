Feature: Add Product to Cart

  Scenario: Add product to cart
    Given I am on the Products page
    When I add a product to the cart
    Then I should see the product in cart
