Feature: Admin clicks on the Menystyrning link
  In order to check if the Menystyrning link works
  As a Admin
  I want to click on the Menystyrning link

  Background:
    Given Admin visits http://smesol-aw-test.sundsvall.dewire.com:8080/web/smesol/index?CT_REMOTE_USER=Selenium&IDP=TIWSS&MO_ROLE=CUSTOMER_SUPPORT
    And Admin goes to Admin Web Ab section
    And Admin clicks on Start

  Scenario Outline: Tab Växelöversikt is clicked
    Given Admin clicks on tab Växelöversikt
    And Admin is checking Menystyrning node nr <nodeNr>
    When Admin clicks on the Menystyrning link
    Then Admin gets forwarded to correct page

    Examples:
      | nodeNr |
      | 1      |
      | 2      |
      | 3      |


