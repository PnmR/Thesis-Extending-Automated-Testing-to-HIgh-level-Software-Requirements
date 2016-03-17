Feature: Admin finds title, number, lock icon, link is visible under Svarsgrupp
  In order to check if all the nodes are visible inside given Svarsgrupp
  As a Admin
  I want to check given node of Svarsgrupp

  Background:
    Given Admin visits http://smesol-aw-test.sundsvall.dewire.com:8080/web/smesol/index?CT_REMOTE_USER=Selenium&IDP=TIWSS&MO_ROLE=CUSTOMER_SUPPORT
    And Admin goes to Admin Web Ab section
    And Admin clicks on Start

  Scenario Outline: Given Svarsgrupp node nr
    Given Admin clicks on tab Växelöversikt
    When Admin is checking Svarsgrupp node nr <nodeNr>
    Then For this node, title is visible
    Then For this node, number is visible
    Then For this node, lock icon is visible
    Then For this node, link is visible

    Examples:
      | nodeNr |
      | 1      |
      | 2      |
      | 3      |

