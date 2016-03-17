Feature: User logs into account
  In order to be able to get access to my personalized settings
  As a User
  I want to log into my account

  Scenario: Existing username and matching password
    Given Bob is in the log in page
    And Username: Bob exists
    And Password: bobpswd matches
    When Bob logs in with password: bobpswd
    Then Log in is successful

  Scenario: Wrong Password
    Given Bob is in the log in page
    And Username: Bob exists
    And Password: pswd does not match
    When Bob logs in with password: pswd
    Then Log in is not successful

  Scenario: Username does not exist
    Given Hailey is in the log in page
    And Username: Hailey does not exist
    When Hailey logs in with password: pswd
    Then Log in is not successful
