Feature 1: Count

  Scenario: Count apples
    Given I have 2 apples
    When I buy 2 apples
    Then I have total 4 apples

  Scenario: Count apples
    Given I have 3 apples
    When I buy 2 apples
    Then I have total __ apples

  Scenario: Count apples
    Given I have 3 apples
    When I buy 2 apples
    Then I have total 6 apples


