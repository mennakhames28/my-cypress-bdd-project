Feature: Search Product

  Scenario: Search for a product
    Given I am on the Products page
    When I search for "dress"
    Then I should see relevant results
