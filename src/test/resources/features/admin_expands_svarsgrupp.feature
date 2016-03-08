Feature: Admin expands Svarsgrupp
  In order to navigate Svarsgrupp
  As a Admin
  I want to expand Svarsgrupp

  Background:
    Given Admin visits http://smesol-aw-test.sundsvall.dewire.com:8080/web/smesol/index?CT_REMOTE_USER=Selenium&IDP=TIWSS&MO_ROLE=CUSTOMER_SUPPORT
    And Admin goes to Admin Web Ab section
    And Admin clicks on Start

  Scenario: Svarsgrupp node nr 1
    Given Admin clicks on tab Växelöversikt
    And Admin is checking Svarsgrupp node nr 1
    When Admin expands Svarsgrupp
    Then For this node, Users logged in is visible