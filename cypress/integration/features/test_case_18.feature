Feature: Category Navigation

  Scenario: Browse categories
    Given I open the Categories menu
    When I select "Women > Dress"
    Then I should see products under "Dress"
