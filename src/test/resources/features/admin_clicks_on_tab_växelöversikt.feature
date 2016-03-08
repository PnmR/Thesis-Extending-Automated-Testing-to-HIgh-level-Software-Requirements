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


  Scenario Outline: There are given number of grupp entries
    Given There are <total> <gruppInput>
    When Admin clicks on tab Växelöversikt
    Then Under Admin Web AB, all <gruppOutput> are shown
    Examples:
      | total | gruppInput   | gruppOutput  |
      | 3     | Menystyrning | Menystyrning |
      | 3     | Svarsgrupp   | Svarsgrupp   |
