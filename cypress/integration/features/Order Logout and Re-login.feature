Feature: Order Logout and Re-login

  Scenario: Logout before placing order, login again and complete
    Given I login and add items to cart
    When I logout
    And I login again
    Then my cart should still have items
    And I can place the order
