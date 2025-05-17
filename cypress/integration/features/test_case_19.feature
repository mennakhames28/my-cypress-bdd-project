Feature: Brand Filter

  Scenario: Filter by brand
    Given I open brand list
    When I click "Polo"
    Then I should see all Polo brand products
