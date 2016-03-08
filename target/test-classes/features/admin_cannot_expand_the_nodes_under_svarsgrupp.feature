Feature: Admin cannot expand the nodes under Svarsgrupp
  In order to
  As a Admin
  I want the nodes under Svarsgrupp to not expand

  Background:
    Given Admin visits http://smesol-aw-test.sundsvall.dewire.com:8080/web/smesol/index?CT_REMOTE_USER=Selenium&IDP=TIWSS&MO_ROLE=CUSTOMER_SUPPORT
    And Admin goes to Admin Web Ab section
    And Admin clicks on Start
    And Admin clicks on tab Växelöversikt

  Scenario Outline: Verify that you can not expand Vid maximal kölängd/kötid
    Given Admin is checking Svarsgrupp node nr <nodeNr>
    And Admin expands Svarsgrupp
    When Admin tries to expand <nodeUnderSvarsgrupp>
    Then It does not expand

    Examples:
      | nodeNr | nodeUnderSvarsgrupp         |
      | 1      | Inga medlemmar tillgängliga |
      | 1      | Stängd svarsgrupp           |
      | 1      | Vid maximal kölängd / kötid |