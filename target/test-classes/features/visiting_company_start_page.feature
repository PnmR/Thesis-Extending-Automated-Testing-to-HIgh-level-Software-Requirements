Feature: Visiting Company Start Page
  In order to navigate through different parts of Company start Page
  As a user
  I want to visit Company start page

  Background:
    Given I visit http://smesol-aw-test.sundsvall.dewire.com:8080/web/smesol/index?CT_REMOTE_USER=Selenium&IDP=TIWSS&MO_ROLE=CUSTOMER_SUPPORT
    When I go to Admin Web Ab section
    When I click on Start

  @prob
  Scenario: Open company start page with mockup problem
    Then Company listed

  Scenario: Open company start page
    Then Växelöversikt tab should be visible
    And Logg tab should be visible


  Scenario: Expanding tab Växelöversikt
    When I click on tab Växelöversikt
    Then Tab Växelöversikt expanded
    And Admin Web AB tree structure is shown

  Scenario:
    Given There are 3 Menystyrning
    When I click on tab Växelöversikt
    Then Under Admin Web AB, all Menystyrning are shown

  Scenario:
    Given There are 3 Svarsgrupp
    When I click on tab Växelöversikt
    Then Under Admin Web AB, all Svarsgrupp are shown

@new
  Scenario:
    Given There is 10 Users
    And I click on tab Växelöversikt
  When I expand Users
    Then Under Admin Web AB, all Users are shown


  Scenario: Menystyrning node nr 1
    Given I am checking Menystyrning node nr 1
    When I click on tab Växelöversikt
    Then For this node, title is visible
    Then For this node, number is visible
    Then For this node, lock icon is visible
    Then For this node, link is visible


  Scenario:  Svarsgrupp node nr 1
    Given I am checking Svarsgrupp node nr 1
    When I click on tab Växelöversikt
    Then For this node, title is visible
    Then For this node, number is visible
    Then For this node, lock icon is visible
    Then For this node, link is visible


  Scenario: Verify Menystyrning link on a specific node
    Given I am checking Menystyrning node nr 1
    And I click on tab Växelöversikt
    When I click on the link
    Then I get forwarded to correct page

  Scenario: Verify Svarsgrupp link on a specific node
    Given I am checking Svarsgrupp node nr 1
    And I click on tab Växelöversikt
    When I click on the link
    Then I get forwarded to correct page

  Scenario: Change Menystyrning name on node nr 1
    Given I am checking Menystyrning node nr 1
    And I click on tab Växelöversikt
    And  I click on the link
    When I change name to change-to-anything
    Then I verify change

  @prob
  Scenario: change in menystyrning number, locked/closed icon

  @prob
  Scenario: krav nr 11
#otydlig krav

  @prob
  Scenario:krav nr 12