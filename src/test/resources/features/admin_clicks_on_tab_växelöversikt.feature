Feature: Admin clicks on tab Växelöversikt
  In order to expand Växelöversikt and observe its content
  As a Admin
  I want to click on tab Växelöversikt

  Background:
    Given Admin visits http://smesol-aw-test.sundsvall.dewire.com:8080/web/smesol/index?CT_REMOTE_USER=Selenium&IDP=TIWSS&MO_ROLE=CUSTOMER_SUPPORT
    And Admin goes to Admin Web Ab section
    And Admin clicks on Start

  Scenario: Tab Växelöversikt is clicked
    When Admin clicks on tab Växelöversikt
    Then Tab Växelöversikt expanded
    And Admin Web AB tree structure is shown

  Scenario: Checking if all Menystyrning are shown
    Given There are 3 Menystyrning
    When Admin clicks on tab Växelöversikt
    Then Under Admin Web AB, all Menystyrning are shown

  Scenario: Checking if all Svarsgrupp are shown
    Given There are 3 Svarsgrupp
    When Admin clicks on tab Växelöversikt
    Then Under Admin Web AB, all Svarsgrupp are shown

