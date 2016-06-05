Feature: Admin clicks on the Användare link
  In order to check if the Användare link works
  As a Admin
  I want to click on the Användare link

  Background:
    Given Admin visits http://smesol-aw-test.sundsvall.dewire.com:8080/web/smesol/index?CT_REMOTE_USER=Selenium&IDP=TIWSS&MO_ROLE=CUSTOMER_SUPPORT
    And Admin goes to Admin Web Ab section
    And Admin clicks on Start

  Scenario Outline: Användare is expanded
    Given Admin clicks on tab Växelöversikt
    And Admin expands Användare
    And Admin is checking Användare node nr <nodeNr>
    When Admin clicks on the Användare link
    Then Admin gets forwarded to correct page

    Examples:
      | nodeNr |
      | 1      |
      | 2      |
      | 3      |



