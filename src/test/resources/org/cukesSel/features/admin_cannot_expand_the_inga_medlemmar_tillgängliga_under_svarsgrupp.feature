Feature: Admin cannot expand the Inga medlemmar tillgängliga under Svarsgrupp
  In order to
  As a Admin
  I want the Inga medlemmar tillgängliga under Svarsgrupp to not expand

  Background:
    Given Admin visits http://smesol-aw-test.sundsvall.dewire.com:8080/web/smesol/index?CT_REMOTE_USER=Selenium&IDP=TIWSS&MO_ROLE=CUSTOMER_SUPPORT
    And Admin goes to Admin Web Ab section
    And Admin clicks on Start
    And Admin clicks on tab Växelöversikt

  Scenario Outline: Verify that you can not expand Inga medlemmar tillgängliga
    Given Admin is checking Svarsgrupp node nr <svarsgruppNodeNr>
    And Admin expands Svarsgrupp
    When Admin tries to expand Inga medlemmar tillgängliga
    Then Inga medlemmar tillgängliga does not expand

    Examples:
      | svarsgruppNodeNr |
      | 1                |
      | 2                |
      | 3                |