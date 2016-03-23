Feature: Admin expands Svarsgrupp
  In order to see the Svarsgrupp settings
  As a Admin
  I want to expand Svarsgrupp

  Background:
    Given Admin visits http://smesol-aw-test.sundsvall.dewire.com:8080/web/smesol/index?CT_REMOTE_USER=Selenium&IDP=TIWSS&MO_ROLE=CUSTOMER_SUPPORT
    And Admin goes to Admin Web Ab section
    And Admin clicks on Start

  Scenario Outline: Given Svarsgrupp node nr
    Given Admin clicks on tab Växelöversikt
    And Admin is checking Svarsgrupp node nr <svarsgruppNodeNr>
    When Admin expands Svarsgrupp
    Then For this node, Users logged in is visible
    Examples:
      | svarsgruppNodeNr |
      | 1                |
      | 2                |


