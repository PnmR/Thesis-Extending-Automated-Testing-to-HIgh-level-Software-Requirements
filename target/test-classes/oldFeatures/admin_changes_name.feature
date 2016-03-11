Feature: Admin changes name
  In order to personalise a node
  As a Admin
  I want to change name

  Background:
    Given Admin visits http://smesol-aw-test.sundsvall.dewire.com:8080/web/smesol/index?CT_REMOTE_USER=Selenium&IDP=TIWSS&MO_ROLE=CUSTOMER_SUPPORT
    And Admin goes to Admin Web Ab section
    And Admin clicks on Start
    And Admin clicks on tab Växelöversikt

  Scenario Outline: Given grupp on given node nr
    Given Admin is checking <grupp> node nr <nodeNr>
    And  Admin clicks on the link
    When Admin changes name to <newName>
    Then Admin verifies change

    Examples:
      | grupp        | nodeNr | newName         |
      | Menystyrning | 1      | newMenystyrning |
      | Svarsgrupp   | 1      | newSvarsgrupp   |