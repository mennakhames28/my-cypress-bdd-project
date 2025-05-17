Feature: View All Products

  Scenario: Navigate to All Products page
    Given I am on the home page
    When I click on Products
    Then I should see the product list
