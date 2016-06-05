Feature: Admin changes name of Svarsgrupp
  In order to personalise Svarsgrupp
  As a Admin
  I want to change name of Svarsgrupp

  Background:
    Given Admin visits http://smesol-aw-test.sundsvall.dewire.com:8080/web/smesol/index?CT_REMOTE_USER=Selenium&IDP=TIWSS&MO_ROLE=CUSTOMER_SUPPORT
    And Admin goes to Admin Web Ab section
    And Admin clicks on Start
    And Admin clicks on tab Växelöversikt

  Scenario Outline: Given Svarsgrupp node
    Given Admin is checking Svarsgrupp node nr <nodeNr>
    And  Admin clicks on the Svarsgrupp link
    When Admin changes name to <newName>
    Then Admin verifies if the name is changed

    Examples:
      | nodeNr | newName         |
      | 1      | newSvarsgrupp2  |
      | 3      | newSvarsgrupp4  |
      | 2      | newSvarsgrupp34 |