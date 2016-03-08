Feature: Admin finds title, number, lock icon, link is visible under grupp
  In order to check if all the nodes are visible inside given grupp
  As a Admin
  I want to check given node of a given grupp

  Background:
    Given Admin visits http://smesol-aw-test.sundsvall.dewire.com:8080/web/smesol/index?CT_REMOTE_USER=Selenium&IDP=TIWSS&MO_ROLE=CUSTOMER_SUPPORT
    And Admin goes to Admin Web Ab section
    And Admin clicks on Start

  Scenario Outline:  Grupp node nr 1
    Given Admin clicks on tab Växelöversikt
    When Admin is checking <grupp> node nr <nodeNr>
    Then For this node, title is visible
    Then For this node, number is visible
    Then For this node, lock icon is visible
    Then For this node, link is visible

    Examples:
      | grupp        | nodeNr |
      | Menystyrning | 1      |
      | Svarsgrupp   | 1      |

