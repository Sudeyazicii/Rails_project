Feature: Survey management
  As a registered user
  I want to submit survey responses
  So that my answers are recorded

  Scenario: User submits a survey response
    Given a registered user exists with email "sudenur@example.com"
    When I request the list of surveys
    Then I should see at least one survey
