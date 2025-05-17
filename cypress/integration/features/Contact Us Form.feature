Feature: Contact Us Form

  Scenario: Submit the contact us form
    Given I am on the Contact Us page
    When I fill in name, email, subject, and message
    And I upload a file
    And I click Submit
    Then I should see success message
