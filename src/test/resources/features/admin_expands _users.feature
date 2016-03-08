Feature: Admin expands Users
  In order to check if all users are shown
  As a Admin
  I want to expand Users

  Background:
    Given Admin visits http://smesol-aw-test.sundsvall.dewire.com:8080/web/smesol/index?CT_REMOTE_USER=Selenium&IDP=TIWSS&MO_ROLE=CUSTOMER_SUPPORT
    And Admin goes to Admin Web Ab section
    And Admin clicks on Start

  Scenario: There are given number of users
    Given There are 10 Users
    And Admin clicks on tab Växelöversikt
    When Admin expands Users
    Then Under Admin Web AB, all Users are shown
