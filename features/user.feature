Feature: User management
  In order to manage users through API
  As an admin
  I want to create a new user via API

  Scenario: Create a user successfully
    When I send a POST request to "/api/v1/users" with:
      | name             | Sude              |
      | email            | sude@example.com  |
      | password         | 123456            |
    Then the response status should be 201
    And the JSON should contain "id"
    And the JSON should contain "email"
