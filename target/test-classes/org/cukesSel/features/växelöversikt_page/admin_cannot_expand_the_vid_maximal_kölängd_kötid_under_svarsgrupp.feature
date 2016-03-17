Feature: Admin cannot expand the Vid maximal kölängd / kötid under Svarsgrupp
  In order to
  As a Admin
  I want the Vid maximal kölängd / kötid under Svarsgrupp to not expand

  Background:
    Given Admin visits http://smesol-aw-test.sundsvall.dewire.com:8080/web/smesol/index?CT_REMOTE_USER=Selenium&IDP=TIWSS&MO_ROLE=CUSTOMER_SUPPORT
    And Admin goes to Admin Web Ab section
    And Admin clicks on Start
    And Admin clicks on tab Växelöversikt

  Scenario Outline: Verify that you can not expand the Vid maximal kölängd / kötid
    Given Admin is checking Svarsgrupp node nr <svarsgruppNodeNr>
    And Admin expands Svarsgrupp
    When Admin tries to expand Vid maximal kölängd / kötid
    Then Vid maximal kölängd / kötid does not expand

    Examples:
      | svarsgruppNodeNr |
      | 1                |
      | 2                |
      | 3                |