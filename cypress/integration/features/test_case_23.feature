Feature: Cart Persistence

  Scenario: Login and cart remains
    Given I add item to cart
    When I logout and login again
    Then my cart should retain the item
