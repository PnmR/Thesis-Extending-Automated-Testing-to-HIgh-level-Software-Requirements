Feature: Admin clicks on the link
  In order to check if the link works
  As a Admin
  I want to click on the link

  Background:
    Given Admin visits http://smesol-aw-test.sundsvall.dewire.com:8080/web/smesol/index?CT_REMOTE_USER=Selenium&IDP=TIWSS&MO_ROLE=CUSTOMER_SUPPORT
    And Admin goes to Admin Web Ab section
    And Admin clicks on Start

  Scenario Outline: Tab Växelöversikt is clicked
    Given Admin clicks on tab Växelöversikt
    And Admin is checking <grupp> node nr <nodeNr>
    When Admin clicks on the link
    Then Admin gets forwarded to correct page

    Examples:
      | grupp        | nodeNr |
      | Svarsgrupp   | 1      |
      | Menystyrning | 1      |

  Scenario: Users is expanded
    Given Admin clicks on tab Växelöversikt
    And Admin expands Users
    And Admin is checking Users node nr 1
    When Admin clicks on the link
    Then Admin gets forwarded to correct page
