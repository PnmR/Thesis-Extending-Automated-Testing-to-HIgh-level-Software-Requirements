Feature: Admin changes name of Menystyrning
  In order to personalise a Menystyrning
  As a Admin
  I want to change name of Menystyrning

  Background:
    Given Admin visits http://smesol-aw-test.sundsvall.dewire.com:8080/web/smesol/index?CT_REMOTE_USER=Selenium&IDP=TIWSS&MO_ROLE=CUSTOMER_SUPPORT
    And Admin goes to Admin Web Ab section
    And Admin clicks on Start
    And Admin clicks on tab Växelöversikt

  Scenario Outline: Given Menystyrning node
    Given Admin is checking Menystyrning node nr <nodeNr>
    And  Admin clicks on the link
    When Admin changes name to <newName>
    Then Admin verifies if the name is changed

    Examples:
      | nodeNr | newName                  |
      | 1      | newMenystyrningfirs6     |
      | 2      | newMenystyrningse80cond  |
      | 3      | newMenystyrningthijljlrd |