Feature: User logs into account
  In order to be able to get access to my personalized settings
  As a User
  I want to log into my account

  Scenario: Existing username and matching password
    Given User is in the log in page
    And Username: Bob exists
    And Password: bobpswd matches
    When Bob logs in with password: bobpswd
    Then Log in is successful

  Scenario: Existing username and matching password
    Given User is in the log in page
    And Username: Doe exists
    And Password: doepswd matches
    When Doe logs in with password: doepswd
    Then Log in is successful

  Scenario: Wrong Password
    Given User is in the log in page
    And Username: Bob exists
    And Password: pswd does not match
    When Bob logs in with password: pswd
    Then Log in is not successful

  Scenario: Username does not exist
    Given User is in the log in page
    And Username: Hailey does not exist
    When Hailey logs in with password: pswd
    Then Log in is not successful

Feature: Account holder logs into its account

  In order to be able to get access to my personalized settings
  As a Account holder
  I want to log into my account

  Scenario: Account is valid
    Given Account holder is in the log in page
    And Doe is input in the username
    And doepswd is input in the password
    When Account holder logs into its account
    Then Navigate to the right page

  Scenario: Account is valid
    Given Account holder is in the log in page
    And Admin is input in the username
    And adminpswd is input in the password
    When Account holder logs into its account
    Then Navigate to the right page

  Scenario: Password does not match
    Given Account holder is in the log in page
    And User is input in the username
    And pswd1 is input in the password
    When Account holder logs into its account
    Then Display “Wrong Password”