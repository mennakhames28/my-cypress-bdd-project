Feature: Order Without Login

  Scenario: Place order before signing up
    Given I add products to cart
    When I proceed to checkout
    And I register during checkout
    Then I should be able to complete payment and place order
