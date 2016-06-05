Feature: Admin expands Användare
  In order to check if all Användare are shown
  As a Admin
  I want to expand Användare

  Background:
    Given Admin visits http://smesol-aw-test.sundsvall.dewire.com:8080/web/smesol/index?CT_REMOTE_USER=Selenium&IDP=TIWSS&MO_ROLE=CUSTOMER_SUPPORT
    And Admin goes to Admin Web Ab section
    And Admin clicks on Start

    @prob
  Scenario: Checking if all Användare are shown
    Given There are 10 Användare
    And Admin clicks on tab Växelöversikt
    When Admin expands Användare
    Then Under Admin Web AB, all Användare are shown


  Scenario: Checking if Användare is listed with name, fixednumber, adm or not, Inloggad/Ej inloggad
    Given Admin clicks on tab Växelöversikt
    When Admin expands Användare
    Then All Användare are listed with name
    And All Användare are listed with fixednumber
    And All Användare are listed with adm or not
    And All Användare are listed with Inloggad/Ej inloggad




