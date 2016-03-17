Feature: Admin clicks on the Users link
  In order to check if the Users link works
  As a Admin
  I want to click on the Users link

  Background:
    Given Admin visits http://smesol-aw-test.sundsvall.dewire.com:8080/web/smesol/index?CT_REMOTE_USER=Selenium&IDP=TIWSS&MO_ROLE=CUSTOMER_SUPPORT
    And Admin goes to Admin Web Ab section
    And Admin clicks on Start

  Scenario Outline: Users is expanded
    Given Admin clicks on tab Växelöversikt
    And Admin expands Users
    And Admin is checking Users node nr <nodeNr>
    When Admin clicks on the Users link
    Then Admin gets forwarded to correct page

    Examples:
      | nodeNr |
      | 1      |
      | 2      |
      | 3      |



