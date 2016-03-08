Feature: Admin expands Users under Svarsgrupp node
  In order to see which users are logged in under a Svarsgrupp
  As a Admin
  I want to Admin expands Users under Svarsgrupp node

  Background:
    Given Admin visits http://smesol-aw-test.sundsvall.dewire.com:8080/web/smesol/index?CT_REMOTE_USER=Selenium&IDP=TIWSS&MO_ROLE=CUSTOMER_SUPPORT
    And Admin goes to Admin Web Ab section
    And Admin clicks on Start
    And Admin clicks on tab Växelöversikt

  Scenario: Users Svarsgrupp node nr 1
    Given Admin is checking Svarsgrupp node nr 1
    And Admin expands Svarsgrupp
    When Under Svarsgrupp node, Admin tries to expand Users
    Then Users under Svarsgrupp expands

  Scenario: Users nr 1
    Given Admin is checking Svarsgrupp node nr 1
    And Admin expands Svarsgrupp
    When Under Svarsgrupp node, Admin tries to expand Users
    Then Users nr 1 is listed with name
    And Users nr 1 is listed with fixednumber
    And Users nr 1 is listed with adm or not
    And Users nr 1 is listed with Inloggad/Ej inloggad