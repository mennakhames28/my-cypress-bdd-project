Feature: Download Invoice

  Scenario: Download after order
    Given I place an order
    When I go to order history
    Then I can download invoice
