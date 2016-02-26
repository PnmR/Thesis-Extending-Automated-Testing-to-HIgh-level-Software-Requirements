Feature: Visiting Company Start Page
  In order to navigate through different parts of Company start Page
  As a user
  I want to visit Company start page

  Background:
    Given I visit http://smesol-aw-test.sundsvall.dewire.com:8080/web/smesol/index?CT_REMOTE_USER=Selenium&IDP=TIWSS&MO_ROLE=CUSTOMER_SUPPORT
    When I go to Admin Web Ab section
    When I click on Start

  @mockupProb
  Scenario: Open company start page with mockup problem
    Then Company listed

  Scenario: Open company start page
    Then Växelöversikt tab should be visible
    And Logg tab should be visible


  Scenario: Expanding tab Växelöversikt
    When I click on tab Växelöversikt
    Then Tab Växelöversikt expanded
    And Admin Web AB tree structure is shown

  @new
  Scenario:
    Given There are 3 Menystyrning
    When I click on tab Växelöversikt
    Then Under Admin Web AB, all Menystyrning are shown

  Scenario:
    Given There are 3 Svarsgrupp
    When I click on tab Växelöversikt
    And Under Admin Web AB, all Svarsgrupp are shown

  Scenario:
    Given There are 1 Användare
    When I click on tab Växelöversikt
    And Under Admin Web AB, all Användare are shown

  Scenario: Menystyrning node
    When I click on tab Växelöversikt
    Then For a Menystyrning, title is visible
    Then For a Menystyrning, number is visible
    Then For a Menystyrning, lock icon is visible
    Then For a Menystyrning, link is visible

  Scenario:  Svarsgrupp node
    When I click on tab Växelöversikt
    Then For a Svarsgrupp, title is visible
    Then For a Svarsgrupp, number is visible
    Then For a Svarsgrupp, lock icon is visible
    Then For a Svarsgrupp, link is visible

  Scenario: Verify Menystyrning link
    Given I click on tab Växelöversikt
    When I click on Menystyrningens link
    Then I get forwarded to correct menystyrning page


  Scenario: Change menystyrning name
    Given I click on tab Växelöversikt
    When I change Menystyrning name
    Then I verify change in "Växelöversikt"


  @mockupProb
  Scenario: change in menystyrning number, locked/closed icon

