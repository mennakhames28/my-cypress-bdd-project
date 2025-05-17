Feature: Product Review

  Scenario: Submit a review
    Given I am on a product detail page
    When I fill review form and submit
    Then I should see confirmation
